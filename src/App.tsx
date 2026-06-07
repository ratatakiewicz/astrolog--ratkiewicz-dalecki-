import { useState } from 'react';
import CatalogList from './CatalogList';
import ObjectDetails from './ObjectDetails';
import DiscoveryForm from './DiscoveryForm';
import './App.css';

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
        opis: 'Czwarta planeta od Słońca, znana jako Czerwona Planeta. Posiada dwa małe księżyce: Fobosa i Deimosa.'
    },
    {
        id: 2,
        nazwa: 'Jowisz',
        typ: 'Gazowy gigant',
        odleglosc: '778 mln km',
        zdjecie: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=600',
        opis: 'Największa planeta Układu Słonecznego. Słynie z Wielkiej Czerwonej Plamy.'
    },
    {
        id: 3,
        nazwa: 'Galaktyka Andromedy',
        typ: 'Galaktyka spiralna',
        odleglosc: '2.5 mln lat swietlnych',
        zdjecie: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=600',
        opis: 'Najbliższa Drodze Mlecznej duża galaktyka spiralna. Zawiera ogromną liczbę gwiazd.'
    },
    {
        id: 4,
        nazwa: 'Syriusz A',
        typ: 'Gwiazda ciagu glownego',
        odleglosc: '8.6 lat swietlnych',
        zdjecie: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600',
        opis: 'Najjaśniejsza gwiazda nocnego nieba, widoczna w gwiazdozbiorze Wielkiego Psa.'
    },
    {
        id: 5,
        nazwa: 'Mglawica Krab',
        typ: 'Pozostalosc po supernowej',
        odleglosc: '6500 lat swietlnych',
        zdjecie: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=600',
        opis: 'Chmura materii powstala w wyniku wybuchu supernowej zaobserwowanego w 1054 roku.'
    }
];

function App() {
    const [objects, setObjects] = useState<CialoNiebieskie[]>(initialObjects);
    const [selectedObject, setSelectedObject] = useState<CialoNiebieskie | null>(null);

    const handleSelectObject = (object: CialoNiebieskie) => {
        setSelectedObject(object);
    };

    const handleAddObject = (newObjectData: NowyObiektDane) => {
        const objectWithId: CialoNiebieskie = {
            ...newObjectData,
            id: Date.now()
        };

        setObjects([...objects, objectWithId]);
    };

    return (
        <main className="app-layout">
            <header className="app-header">
                <div>
                    <h1>AstroLog</h1>
                    <p>Scentralizowany Rejestr Obserwacji Astronomicznych</p>
                </div>
            </header>

            <section className="workspace-layout">
                <CatalogList
                    objects={objects}
                    selectedObject={selectedObject}
                    onSelectedObject={handleSelectObject}
                />

                <ObjectDetails selectedObjects={selectedObject} />
            </section>

            <DiscoveryForm onAddObjects={handleAddObject} />
        </main>
    );
}

export default App;
