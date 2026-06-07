import {useState, type FormEvent} from 'react';
import type {NowyObiektDane} from './App';

interface DiscoveryFormProps {
    onAddObjects: (nowyObiekt: NowyObiektDane) => void;
}

export default function DiscoveryForm({ onAddObjects }: DiscoveryFormProps) {
    const [nazwa, setNazwa] = useState('');
    const [typ, setTyp] = useState('');
    const [odleglosc, setOdleglosc] = useState('');
    const [zdjecie, setZdjecie] = useState('');
    const [opis, setOpis] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const domyslneZdjecie = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600';
        const domyslnyOpis = 'Brak dodatkowego opisu dla nowo skatalogowanego obiektu kosmicznego.';

        onAddObjects({
            nazwa: nazwa,
            typ: typ,
            odleglosc: odleglosc,
            zdjecie: zdjecie.trim() !== '' ? zdjecie : domyslneZdjecie,
            opis: opis.trim() !== '' ? opis : domyslnyOpis
        });

        setNazwa('');
        setTyp('');
        setOdleglosc('');
        setZdjecie('');
        setOpis('');
    };

    return (
        <section className="form-panel">
            <div className="panel-title">
                <h2>Formularz</h2>
                <p>Zgłoś anomalie / obiekt</p>
            </div>

            <form className="discovery-form" onSubmit={handleSubmit}>
                <label>
                    Nazwa obiektu *
                    <input
                        type="text"
                        required
                        value={nazwa}
                        onChange={(e) => setNazwa(e.target.value)}
                        placeholder="np. Kepler-22b"
                    />
                </label>

                <label>
                    Typ obiektu *
                    <input
                        type="text"
                        required
                        value={typ}
                        onChange={(e) => setTyp(e.target.value)}
                        placeholder="np. Egzoplaneta"
                    />
                </label>

                <label>
                    Odległość od Ziemi *
                    <input
                        type="text"
                        required
                        value={odleglosc}
                        onChange={(e) => setOdleglosc(e.target.value)}
                        placeholder="np. 620 lat świetlnych"
                    />
                </label>

                <label>
                    Adres URL zdjęcia
                    <input
                        type="url"
                        value={zdjecie}
                        onChange={(e) => setZdjecie(e.target.value)}
                        placeholder="Opcjonalnie: https://..."
                    />
                </label>

                <label className="form-wide">
                    Opis
                    <textarea
                        value={opis}
                        onChange={(e) => setOpis(e.target.value)}
                        placeholder="Krótki opis obserwacji..."
                        rows={3}
                    />
                </label>

                <button type="submit">Zapisz odkrycie</button>
            </form>
        </section>
    );
}
