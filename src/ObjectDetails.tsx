import type {CialoNiebieskie} from './App';

interface ObjectDetailsProps {
    selectedObjects: CialoNiebieskie | null;
}

export default function ObjectDetails({ selectedObjects }: ObjectDetailsProps) {
    return (
        <section className="details-panel">
            <h2>Szczegóły</h2>

            {!selectedObjects ? (
                <div className="details-empty">
                    <p>Wybierz obiekt z listy, aby zobaczyć szczegóły obserwacji.</p>
                </div>
            ) : (
                <article className="details-content">
                    <img
                        className="details-image"
                        src={selectedObjects.zdjecie}
                        alt={selectedObjects.nazwa}
                    />

                    <div className="details-text">
                        <h3>{selectedObjects.nazwa}</h3>
                        <p>{selectedObjects.opis}</p>

                        <div className="details-facts">
                            <p>
                                <strong>Typ:</strong> {selectedObjects.typ}
                            </p>
                            <p>
                                <strong>Odległość od Ziemi:</strong> {selectedObjects.odleglosc}
                            </p>
                        </div>
                    </div>
                </article>
            )}
        </section>
    );
}
