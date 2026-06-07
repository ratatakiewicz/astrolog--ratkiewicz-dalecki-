import { useState } from 'react';
import CatalogList from './CatalogList';
import ObjectDetails from './ObjectDetails';
import DiscoveryForm from './DiscoveryForm';


export interface CialoNiebieskie {
    id: number;
    nazwa: string;
    typ: string;
    odleglosc: string;
    zdjecie: string;
    opis: string;
}


export type NowyObiektDane = Omit<CialoNiebieskie, 'id'>;


const initialObjects: CialoNiebieskie[] = [
    {
        id: 1,
        nazwa: 'Mars',
        typ: 'Planeta skalista',
        odleglosc: '225 mln km',
        zdjecie: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=600',
        opis: 'Czwarta planeta od Słońca, znana jako Czerwona Planeta ze względu na obecność tlenków żelaza na jej powierzchni. Posiada dwa małe księżyce: Fobosa i Deimosa.'
    },
    {
        id: 2,
        nazwa: 'Jowisz',
        typ: 'Gazowy Gigant',
        odleglosc: '778 mln km',
        zdjecie: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=600',
        opis: 'Największa planeta Układu Słonecznego. Jej masa jest ponad dwukrotnie większa niż masa wszystkich pozostałych planet razem wziętych. Słynie z Wielkiej Czerwonej Plamy.'
    },
    {
        id: 3,
        nazwa: 'Galaktyka Andromedy',
        typ: 'Galaktyka spiralna',
        odleglosc: '2.5 mln lat świetlnych',
        zdjecie: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=600',
        opis: 'Najbliższa Drogi Mlecznej duża galaktyka spiralna. Zawiera około biliona gwiazd i zbliża się do naszej galaktyki z prędkością około 110 km/s.'
    },
    {
        id: 4,
        nazwa: 'Syriusz A',
        typ: 'Gwiazda ciągu głównego',
        odleglosc: '8.6 lat świetlnych',
        zdjecie: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600',
        opis: 'Najjaśniejsza gwiazda nocnego nieba, widoczna w gwiazdozbiorze Wielkiego Psa. W rzeczywistości jest to układ podwójny, składający się z gwiazdy ciągu głównego oraz białego karła.'
    },
    {
        id: 5,
        nazwa: 'Mgławica Krab',
        typ: 'Pozostałość po supernowej',
        odleglosc: '6500 lat świetlnych',
        zdjecie: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=600',
        opis: 'Chmura materii powstała w wyniku spektakularnego wybuchu supernowej, który został zaobserwowany przez chińskich astronomów w 1054 roku. W jej centrum znajduje się pulsar.'
    }
];

function App() {
    const [objects, setObjects] = useState<CialoNiebieskie[]>(initialObjects);
    const [selectedId, setSelectedId] = useState<number | null>(null);


    const handleSelectObject = (id: number) => {
        setSelectedId(id);
    };

    const handleAddObject = (newObjectData: NowyObiektDane) => {
        const objectWithId: CialoNiebieskie = {
            ...newObjectData,
            id: Date.now() // Generowanie unikalnego klucza ID
        };
        setObjects([...objects, objectWithId]);
    };


    const activeObject = objects.find(obj => obj.id === selectedId);

    return (
        <div
            className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 lg:p-8 flex flex-col gap-6 max-w-6xl mx-auto w-full">


            <header className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-xl">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">🔭</span>
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            AstroLog TS
                        </h1>
                        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">
                            Scentralizowany Rejestr Obserwacji Astronomicznych
                        </p>
                    </div>
                </div>
            </header>


            <div className="flex flex-col md:flex-row gap-6 items-stretch">


                <div className="w-full md:w-1/3 shrink-0 flex flex-col">
                    <CatalogList
                        objects={objects}
                        selectedId={selectedId}
                        onSelectedObject={handleSelectObject}
                    />
                </div>


                <div className="flex-1 flex flex-col">
                    <ObjectDetails selectedObjects={activeObject}/>
                </div>

            </div>
            <div className="w-full">
                <DiscoveryForm onAddObjects={handleAddObject}/>
            </div>

        </div>
    );
}

export default App