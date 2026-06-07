import type {CialoNiebieskie} from './App';

interface CatalogListProps {
    objects: CialoNiebieskie[];
    selectedObject: CialoNiebieskie | null;
    onSelectedObject: (object: CialoNiebieskie) => void;
}

export default function CatalogList({ objects, selectedObject, onSelectedObject }: CatalogListProps) {
    return (
        <aside className="bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col h-full shadow-xl overflow-hidden">

            {/* Nagłówek Katalogu */}
            <div className="p-5 border-b border-slate-800/80 bg-slate-950/30 flex justify-between items-center">
                <div>
                    <h2 className="text-md font-bold text-slate-200">Katalog Obiektów</h2>
                    <p className="text-[11px] text-indigo-400 font-medium">Baza zweryfikowanych ciał</p>
                </div>
                <span className="bg-indigo-950 text-indigo-300 text-[11px] font-bold px-2 py-0.5 rounded-full border border-indigo-800">
          Suma: {objects.length}
        </span>
            </div>

            {/* Renderowanie listy za pomocą metody .map() z zachowaniem klucza key (Zadanie 4) */}
            <ul className="flex-1 overflow-y-auto p-4 space-y-2 max-h-[340px] md:max-h-[380px]">
                {objects.map((obiekt) => {
                    const jestWybrany = selectedObject?.id === obiekt.id;
                    return (
                        <li
                            key={obiekt.id} // Klucz wymagany przez React
                            onClick={() => onSelectedObject(obiekt)} // Przekazywanie akcji wyboru w górę do rodzica
                            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 group ${
                                jestWybrany
                                    ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-400'
                                    : 'bg-slate-800/40 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-transparent hover:border-slate-700/50'
                            }`}
                        >
                            <img
                                src={obiekt.zdjecie}
                                alt={obiekt.nazwa}
                                className="w-10 h-10 rounded-lg object-cover border border-slate-700/50 group-hover:border-slate-500 transition-colors"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm truncate">{obiekt.nazwa}</p>
                                <p className={`text-[11px] truncate ${jestWybrany ? 'text-indigo-200' : 'text-slate-400'}`}>
                                    {obiekt.typ}
                                </p>
                            </div>
                            <span className={`text-xs font-medium ${jestWybrany ? 'text-indigo-200' : 'text-slate-500'}`}>
                &gt;
              </span>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
