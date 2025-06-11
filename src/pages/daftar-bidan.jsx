import React, { useState } from "react";
import anakibu from '../assets/anakibu.png';

const bidanList = [
    {
        id: 1,
        nama: "Bidan Profesional #1",
        lokasi: "Kota A",
        foto: "https://randomuser.me/api/portraits/men/11.jpg",
        deskripsi: "Berpengalaman lebih dari 10 tahun. Spesialis ibu dan anak.",
    },
    {
        id: 2,
        nama: "Bidan Profesional #2",
        lokasi: "Kota A",
        foto: "https://randomuser.me/api/portraits/men/12.jpg",
        deskripsi: "Lulusan terbaik universitas ternama. Ramah dan profesional.",
    },
    {
        id: 3,
        nama: "Bidan Profesional #3",
        lokasi: "Kota A",
        foto: "https://randomuser.me/api/portraits/men/13.jpg",
        deskripsi: "Melayani konsultasi kehamilan dan tumbuh kembang anak.",
    },
    {
        id: 4,
        nama: "Bidan Profesional #4",
        lokasi: "Kota A",
        foto: "https://randomuser.me/api/portraits/men/14.jpg",
        deskripsi: "Berpengalaman di klinik dan rumah sakit ibu & anak.",
    },
];

const DaftarBidan = () => {
    const [selectedBidan, setSelectedBidan] = useState(null);

    return (
        <div className="font-sans">
            {/* HERO SECTION */}
            <section className="relative w-full h-[70vh] flex items-center justify-center bg-white overflow-hidden">
                <img
                    src={anakibu}
                    alt="Bidan menggendong bayi"
                    className="absolute inset-0 w-full h-full object-cover z-0 rounded-b-3xl shadow-lg"
                    style={{objectPosition: 'center top'}}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex items-center justify-center">
                    <div className="text-white max-w-xl text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
                            Lorem ipsum fames fusce venenatis tellus.
                        </h1>
                        <p className="mb-6 text-lg md:text-xl drop-shadow">
                            Lorem ipsum dolor sit amet consectetur. At sagittis semper duis sed curabitur vitae id enim diam.
                        </p>
                        <a
                            href="#daftar-bidan"
                            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition shadow text-lg"
                        >
                            Cari Bidan untuk Si Kecil &rarr;
                        </a>
                    </div>
                </div>
            </section>

            {/* DAFTAR BIDAN SECTION */}
            <section id="daftar-bidan" className="py-12 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2 text-left text-blue-700">
                        Daftar Bidan Profesional
                    </h2>
                    <p className="mb-8 text-blue-700 text-left max-w-2xl">
                        Temukan bidan profesional terbaik untuk kebutuhan ibu dan anak Anda.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {bidanList.map((bidan) => (
                            <div
                                key={bidan.id}
                                className="bg-white border border-blue-300 rounded-2xl p-6 shadow-md flex flex-col items-center transition hover:shadow-lg"
                            >
                                <img
                                    src={bidan.foto}
                                    alt={bidan.nama}
                                    className="w-32 h-40 object-cover rounded-xl mb-4 bg-gray-200"
                                />
                                <h3 className="font-semibold text-blue-700 text-lg mb-1">
                                    {bidan.nama}
                                </h3>
                                <p className="text-blue-700 text-sm mb-4 text-center">
                                    {bidan.deskripsi}
                                </p>
                                <button
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full font-semibold hover:bg-blue-400 transition"
                                    onClick={() => setSelectedBidan(bidan)}
                                >
                                    Detail
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Detail Bidan */}
                {selectedBidan && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-white rounded-lg p-6 max-w-sm w-full relative shadow-lg">
                            <button
                                className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl"
                                onClick={() => setSelectedBidan(null)}
                                aria-label="Tutup"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedBidan.foto}
                                alt={selectedBidan.nama}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 bg-gray-200"
                            />
                            <h3 className="text-xl font-bold mb-2 text-blue-700 text-center">
                                {selectedBidan.nama}
                            </h3>
                            <p className="text-gray-500 text-center mb-2">
                                {selectedBidan.lokasi}
                            </p>
                            <p className="text-black text-center mb-4">
                                {selectedBidan.deskripsi}
                            </p>
                            <button
                                className="bg-blue-500 text-white px-6 py-2 rounded w-full hover:bg-blue-400"
                                onClick={() => setSelectedBidan(null)}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}
            </section>

            {/* PETA LOKASI SECTION */}
            <section className="py-12 px-6 text-center bg-white">
                <h2 className="text-xl font-bold text-blue-700 mb-4">
                    Lokasi Praktik Bidan
                </h2>
                <input
                    type="text"
                    placeholder="Cari berdasarkan lokasi..."
                    className="px-4 py-2 border border-gray-300 rounded mb-6 w-72"
                />
                <div className="w-full h-[400px]">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0547396491813!2d106.8271532741089!3d-6.256187261255763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1579b3d4e77%3A0x1f3cb7646f21f2a4!2sJakarta%20Selatan!5e0!3m2!1sid!2sid!4v1623329851313!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-md border"
                    ></iframe>
                </div>
            </section>

            {/* HASIL PENCARIAN SECTION */}
            <section className="py-12 px-6 text-left bg-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-blue-700">
                    Hasil Pencarian
                </h2>
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between bg-white p-4 rounded shadow mb-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`https://randomuser.me/api/portraits/women/${i + 30}.jpg`}
                                alt={`Bidan Anisa #${i}`}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-semibold text-black">Bidan Anisa #{i}</h3>
                                <p className="text-sm text-gray-500">
                                    Lokasi: Jakarta Selatan - Spesialis anak & ibu hamil
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-yellow-400 mb-2">{'★'.repeat(4)}☆</div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
                                lihat lokasi
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default DaftarBidan;
