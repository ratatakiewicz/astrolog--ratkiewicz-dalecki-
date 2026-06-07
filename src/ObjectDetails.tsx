import {type CialoNiebieskie } from './App';

interface ObjectDetailsProps {
    selectedObjects: CialoNiebieskie | undefined;
}

export default function ObjectDetails({ selectedObjects }: ObjectDetailsProps) {
    return (
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 min-h-[340px] md:min-h-full flex flex-col justify-center shadow-xl relative overflow-hidden h-full">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Renderowanie Warunkowe: Sprawdzamy stan za pomocą ternary operator (Zadanie 5) */}
            {!selectedObjects ? (

                // Warunek 1: Brak wybranego obiektu (komunikat)
                <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 bg-slate-800/80 rounded-full flex items-center justify-center mb-4 border border-slate-700/50 animate-pulse">
                        <span className="text-3xl text-slate-400">📡</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-300">System oczekuje na sygnał</h3>
                    <p className="text-slate-400 text-sm max-w-sm mt-1">
                        Wybierz dowolne ciało niebieskie z katalogu po lewej stronie, aby otworzyć bezpieczne łącze telemetryczne.
                    </p>
                </div>

            ) : (

                // Warunek 2: Wyświetlanie szczegółów wybranego obiektu
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start w-full relative z-10">

                    <div className="w-full sm:w-48 h-40 sm:h-48 shrink-0 rounded-xl overflow-hidden shadow-lg border border-slate-700 bg-slate-950">
                        <img
                            src={selectedObjects.zdjecie}
                            alt={selectedObjects.nazwa}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-between h-full space-y-4">
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="bg-indigo-950 text-indigo-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-indigo-900">
                  {selectedObjects.typ}
                </span>
                                <span className="bg-emerald-950 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-emerald-900">
                  Status: Monitorowany
                </span>
                            </div>
                            <h2 className="text-2xl font-black text-white">{selectedObjects.nazwa}</h2>
                            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                                {selectedObjects.opis}
                            </p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3.5 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                Odległość od Ziemi
              </span>
                            <span className="text-sm font-bold text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-lg border border-cyan-900/30">
                {selectedObjects.odleglosc}
              </span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}