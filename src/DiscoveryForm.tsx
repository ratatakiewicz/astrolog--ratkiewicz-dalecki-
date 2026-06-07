import React, { useState } from 'react';
import {type NowyObiektDane } from './App';

interface DiscoveryFormProps {
    onAddObjects: (nowyObiekt: NowyObiektDane) => void;
}

export default function DiscoveryForm({ onAddObjects }: DiscoveryFormProps) {
    // Lokalne stany dla kontrolowanych komponentów input (Zadanie 6)
    const [nazwa, setNazwa] = useState('');
    const [typ, setTyp] = useState('');
    const [odleglosc, setOdleglosc] = useState('');
    const [zdjecie, setZdjecie] = useState('');
    const [opis, setOpis] = useState('');

    // Metoda wywoływana przy przesłaniu formularza
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Zablokowanie przeładowania strony

        const domyslneZdjecie = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600';
        const domyslnyOpis = 'Brak dodatkowego opisu dla nowo skatalogowanego obiektu kosmicznego.';

        // Wywołanie metody przekazanej w propsach w celu podniesienia stanu
        onAddObjects({
            nazwa: nazwa,
            typ: typ,
            odleglosc: odleglosc,
            zdjecie: zdjecie.trim() !== '' ? zdjecie : domyslneZdjecie,
            opis: opis.trim() !== '' ? opis : domyslnyOpis
        });

        // Resetowanie lokalnych stanów formularza
        setNazwa('');
        setTyp('');
        setOdleglosc('');
        setZdjecie('');
        setOpis('');
    };

    return (
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-xl relative w-full">
            <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-200">🚀 Zgłoś nowe odkrycie</h3>
                <p className="text-xs text-slate-400">
                    Wprowadź dane telemetryczne obiektu, aby zapisać go w bazie centralnej.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Kontrolowane pole: Nazwa */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-slate-400 font-semibold" htmlFor="field-nazwa">Nazwa obiektu *</label>
                    <input
                        id="field-nazwa"
                        type="text"
                        required
                        value={nazwa}
                        onChange={(e) => setNazwa(e.target.value)}
                        placeholder="np. Kepler-22b"
                        className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Kontrolowane pole: Typ */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-slate-400 font-semibold" htmlFor="field-typ">Typ obiektu *</label>
                    <input
                        id="field-typ"
                        type="text"
                        required
                        value={typ}
                        onChange={(e) => setTyp(e.target.value)}
                        placeholder="np. Egzoplaneta wodna"
                        className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Kontrolowane pole: Odległość */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-slate-400 font-semibold" htmlFor="field-odleglosc">Odległość od Ziemi *</label>
                    <input
                        id="field-odleglosc"
                        type="text"
                        required
                        value={odleglosc}
                        onChange={(e) => setOdleglosc(e.target.value)}
                        placeholder="np. 620 lat świetlnych"
                        className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Kontrolowane pole: Adres URL zdjęcia */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs text-slate-400 font-semibold" htmlFor="field-zdjecie">Adres URL zdjęcia</label>
                    <input
                        id="field-zdjecie"
                        type="url"
                        value={zdjecie}
                        onChange={(e) => setZdjecie(e.target.value)}
                        placeholder="Opcjonalnie: https://..."
                        className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                </div>

                {/* Kontrolowane pole: Opis */}
                <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-xs text-slate-400 font-semibold" htmlFor="field-opis">Opis obiektu</label>
                    <textarea
                        id="field-opis"
                        value={opis}
                        onChange={(e) => setOpis(e.target.value)}
                        placeholder="Wprowadź krótki opis ze szczegółami obserwacji..."
                        rows={3}
                        className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                </div>

                {/* Przycisk wysyłający formularz w górę */}
                <div className="md:col-span-2 pt-2">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-950/50 hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                    >
                        <span>➕</span> Zapisz odkrycie w bazie centralnej
                    </button>
                </div>
            </form>
        </section>
    );
}
