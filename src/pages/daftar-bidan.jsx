import React, { useState } from "react";
import ChildDoctor from "../assets/child-doctor.svg";
import Search from "../assets/search.svg";
import ArrowRight from "../assets/arrow-right.svg";

const bidanList = [
    {
        id: 1,
        nama: "dr. Markus Mualim Danusantoso, Sp.A",
        pendidikan: "Spesialis Anak - FKUI",
        tempat_praktik: "RS Pondok Indah - Jakarta Selatan",
        rating: 4,
        foto_url: "https://zoockoiwfztxckmtdmct.supabase.co/storage/v1/object/sign/bidan/dr.-Markus-Mualim-Danusantoso,-Sp.A-5f0a15c1-c661-4738-b586-aa38739168d4.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wYTllNDY4Zi1iMDZkLTRkOGMtYjVhNC0yN2Y0M2NjYWYyZWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiaWRhbi9kci4tTWFya3VzLU11YWxpbS1EYW51c2FudG9zbywtU3AuQS01ZjBhMTVjMS1jNjYxLTQ3MzgtYjU4Ni1hYTM4NzM5MTY4ZDQud2VicCIsImlhdCI6MTc0OTU3NzE0OCwiZXhwIjoxNzUyMTY5MTQ4fQ.XO0sPAxJe7JaNNlAeP963NcdFyZTQryGAkay7woQNhM",
        latitude: -6.2847,
        longitude: 106.7829,  
        harga: 400000,      
        jadwal_praktik: "Senin–Jumat, 09.00–12.00 WIB",
    },
    {
        id: 2,
        nama: "dr. I Gusti Ayu Nyoman Partiwi, Sp.A, MARS",
        pendidikan: "Sp.A, Magister Administrasi Rumah Sakit - FKUI",
        tempat_praktik: "RSIA Bunda - Menteng, Jakarta",
        rating: 5,
        foto_url: "https://zoockoiwfztxckmtdmct.supabase.co/storage/v1/object/sign/bidan/dr.-I-Gusti-Ayu-Nyoman-Partiwi,-Sp.A,-MARS.PNG-06038e57-7b8e-4b16-b31e-7d52a5f850f9.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wYTllNDY4Zi1iMDZkLTRkOGMtYjVhNC0yN2Y0M2NjYWYyZWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiaWRhbi9kci4tSS1HdXN0aS1BeXUtTnlvbWFuLVBhcnRpd2ksLVNwLkEsLU1BUlMuUE5HLTA2MDM4ZTU3LTdiOGUtNGIxNi1iMzFlLTdkNTJhNWY4NTBmOS53ZWJwIiwiaWF0IjoxNzQ5NTgxNDQ0LCJleHAiOjE3NTIxNzM0NDR9.iwBmAJdNwFX_lu7yYqU46R4sq3ag57S71OWSU3NXrig",
        latitude: -6.1963,
        longitude: 106.8385,  
        harga: 600000,      
        jadwal_praktik: "Senin–Sabtu, 10.00–13.00 WIB",
    },
    {
        id: 3,
        nama: "dr. Madeleine Ramdhani Jasin, Sp.A (K)",
        pendidikan: "Konsultan Tumbuh Kembang - FKUI",
        tempat_praktik: "RSIA Bunda Jakarta - Menteng",
        rating: 5,
        foto_url: "https://zoockoiwfztxckmtdmct.supabase.co/storage/v1/object/sign/bidan/dr.-Madeleine-Ramdhani-Jasin,-Sp.A-(K)-adbc967e-a4e7-42ed-9b9c-7c0933e236b2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wYTllNDY4Zi1iMDZkLTRkOGMtYjVhNC0yN2Y0M2NjYWYyZWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiaWRhbi9kci4tTWFkZWxlaW5lLVJhbWRoYW5pLUphc2luLC1TcC5BLShLKS1hZGJjOTY3ZS1hNGU3LTQyZWQtOWI5Yy03YzA5MzNlMjM2YjIud2VicCIsImlhdCI6MTc0OTU3NzI3NCwiZXhwIjoxNzUyMTY5Mjc0fQ.SVfNFxLYedrDvmADmtE963-NOZ1UiSMFAS26peb7MZQ",
        latitude: -6.1961,
        longitude: 106.8386,  
        harga: 550000,      
        jadwal_praktik: "Rabu & Sabtu, 09.00–12.00 WIB",
    },
    {
        id: 4,
        nama: "dr. Frieda Handayani, Sp.A (K)",
        pendidikan: "Konsultan Anak - FKUI",
        tempat_praktik: "RSUP Persahabatan - Jakarta Timur",
        rating: 5,
        foto_url: "https://zoockoiwfztxckmtdmct.supabase.co/storage/v1/object/sign/bidan/Frieda%20Handayani%20Kawanto,%20Sp.%20A%20(K).jpg.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wYTllNDY4Zi1iMDZkLTRkOGMtYjVhNC0yN2Y0M2NjYWYyZWUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiaWRhbi9GcmllZGEgSGFuZGF5YW5pIEthd2FudG8sIFNwLiBBIChLKS5qcGcud2VicCIsImlhdCI6MTc0OTU4MTI5OSwiZXhwIjoxNzUyMTczMjk5fQ.odGSMThqV2sM1R2gVDWNcnr4P4DRhKhrAj1UyV24J50",
        latitude: -6.1964,
        longitude: 106.8912,  
        harga: 550000,      
        jadwal_praktik: "Rabu & Jumat, 10.00–13.00 WIB",
    },
];

export default function DaftarBidan() {
    const [selectedBidan, setSelectedBidan] = useState(null);
    const [search, setSearch] = useState("");

    // Universal search: filter by name OR location (case-insensitive)
    const filteredBidan = bidanList.filter(bidan => {
        const q = search.toLowerCase();
        return (
            bidan.nama.toLowerCase().includes(q) ||
            bidan.tempat_praktik.toLowerCase().includes(q)
        );
    });

    return (
        <div className="font-sans">
            {/* HERO SECTION */}
            <section className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
                <img
                    src={ChildDoctor}
                    alt="Bidan menggendong bayi"
                    className="absolute inset-0 w-full h-full object-cover z-0 rounded-b-3xl shadow-lg mt-22"
                    style={{objectPosition: 'center top'}}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="text-white max-w-xl text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
                            Temukan Bidan dan Dokter Anak Terbaik untuk Si Kecil
                        </h1>
                        <p className="mb-6 text-lg md:text-xl drop-shadow">
                            Dapatkan layanan kesehatan anak dan ibu terbaik dari tenaga profesional terpercaya di sekitar Anda. Pilih bidan atau dokter anak yang sesuai dengan kebutuhan keluarga Anda.
                        </p>
                        <a
                            href="#daftar-bidan"
                            className="flex bg-black text-white gap-2 justify-center py-2 px-6 rounded-md hover:shadow-lg text-lg w-fit mx-auto"
                        >
                            Cari Bidan untuk Si Kecil
                            <img src={ArrowRight} alt="panah" />
                        </a>
                    </div>
                </div>
            </section>


            {/* DAFTAR DOKTER SECTION */}
            <section className="py-12 px-4 md:px-8 bg-white text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-blue)] mb-2">
                    Daftar Dokter Anak
                </h2>
                <p className="text-[var(--color-darkgrey)] mb-6">
                    Cari dan temukan bidan atau dokter anak berpengalaman yang siap membantu tumbuh kembang si kecil dengan sepenuh hati.
                </p>
                {/* Universal Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Cari dokter atau lokasi..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full py-3 pl-5 pr-12 rounded-full border-2 border-[var(--color-grey)] shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <img src={Search} alt="cari" className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-60" />
                    </div>
                </div>
                {/* Doctor Cards Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredBidan.slice(0, 4).map((bidan) => (
                        <div
                            key={bidan.id}
                            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                        >
                            <img
                                src={bidan.foto_url}
                                alt={bidan.nama}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <h3 className="font-semibold text-[var(--color-blue)]">{bidan.nama}</h3>
                            <p className="text-sm text-[var(--color-darkgrey)] mt-2 mb-1">{bidan.pendidikan}</p>
                            <p className="text-xs text-[var(--color-darkgrey)] mb-2">{bidan.tempat_praktik}</p>
                            <div className="flex items-center justify-center mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className={i < bidan.rating ? 'text-[var(--color-yellow)]' : 'text-[var(--color-grey)]'}>★</span>
                                ))}
                            </div>
                            <button
                                className="bg-[var(--color-blue)] text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition"
                                onClick={() => setSelectedBidan(bidan)}
                            >
                                Detail
                            </button>
                        </div>
                    ))}
                    {filteredBidan.length === 0 && (
                        <div className="col-span-full text-center text-gray-400 py-10">Tidak ada dokter ditemukan</div>
                    )}
                </div>
            </section>
        </div>
    );
};