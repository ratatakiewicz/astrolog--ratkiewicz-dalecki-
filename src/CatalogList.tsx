import type {CialoNiebieskie} from './App';

interface CatalogListProps {
    objects: CialoNiebieskie[];
    selectedObject: CialoNiebieskie | null;
    onSelectedObject: (object: CialoNiebieskie) => void;
}

export default function CatalogList({ objects, selectedObject, onSelectedObject }: CatalogListProps) {
    return (
        <aside className="catalog-panel">
            <div className="panel-title">
                <h2>Lista</h2>
                <p>Obiekty: {objects.length}</p>
            </div>

            <ul className="catalog-list">
                {objects.map((obiekt) => {
                    const jestWybrany = selectedObject?.id === obiekt.id;

                    return (
                        <li key={obiekt.id}>
                            <button
                                className={`catalog-item ${jestWybrany ? 'catalog-item-active' : ''}`}
                                type="button"
                                onClick={() => onSelectedObject(obiekt)}
                            >
                                <img src={obiekt.zdjecie} alt={obiekt.nazwa} />
                                <span>{obiekt.nazwa}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
