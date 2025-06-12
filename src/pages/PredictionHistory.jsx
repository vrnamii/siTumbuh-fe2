import '/src/index.css';
import React, { useState } from "react";

export default function PredictionHistory() {
  const [search, setSearch] = useState("");
  const data = [
    {
      nama: "Ni Komang Purnami",
      tanggal: "13-01-2025",
      umur: 6,
      tinggi: 57,
      hasil: "Tidak Stunting",
    },
    {
      nama: "Ni Komang Purnama",
      tanggal: "13-01-2025",
      umur: 12,
      tinggi: 100,
      hasil: "Stunting",
    },
    {
      nama: "Ni Komang Ari",
      tanggal: "13-01-2025",
      umur: 12,
      tinggi: 100,
      hasil: "Stunting",
    },
    {
      nama: "Ni Komang Xixi",
      tanggal: "13-01-2025",
      umur: 12,
      tinggi: 100,
      hasil: "Tidak Stunting",
    },
  ];

  // Filter data berdasarkan pencarian nama (case-insensitive)
  const filteredData = data.filter(item => item.nama.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen mt-32 mb-24 px-2 md:px-16">
      <h2 className="text-center text-[var(--color-blue)] text-2xl font-semibold mb-10">Riwayat Periksa</h2>
      <p className="text-sm sm:text-base text-center text-[var(--color-darkgrey)] mb-10 px-2 sm:px-6 md:px-16 lg:px-100 ">
          Lorem ipsum dolor sit amet consectetur. At sagittis semper duis sed curabitur vitae id enim diam.
          Condimentum ultricies nunc mauris egestas leo tempus congue dictum.
      </p>
      <div className="flex justify-center mb-4 px-2 md:justify-end">
        <input
          type="text"
          placeholder="Cari nama..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-[var(--color-darkgrey)] rounded-md px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
        />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="text-sm sm:text-base bg-[var(--color-blue)] text-white text-left">
              <th className="p-3">Nama</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Umur (bulan)</th>
              <th className="p-3">Tinggi badan (cm)</th>
              <th className="p-3 min-w-[120px] sm:min-w-[200px]">Hasil Prediksi</th>
            </tr>
          </thead>
          <tbody className="text-black bg-[var(--color-grey)]">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-sm sm:text-base text-center py-6 text-[var(--color-darkgrey)]">Tidak ada data ditemukan</td>
              </tr>
            ) : (
              filteredData.map((item, idx) => (
                <tr key={idx}>
                  <td className="text-sm sm:text-base p-3 min-w-[180px] sm:min-w-full">{item.nama}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[100px] sm:min-w-[120px]">{item.tanggal}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[130px] sm:min-w-[200px] lg:min-w-[200px]">{item.umur}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[160px] sm:min-w-[180px]">{item.tinggi}</td>
                  <td className="text-sm sm:text-base p-3 min-w-[160px] sm:min-w-[180px]">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-xs font-medium sm:text-base ${
                        item.hasil === "Stunting" ? "bg-[var(--color-red)]" : "bg-[var(--color-green)]"
                      }`}
                    >
                      {item.hasil}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


