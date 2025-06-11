import '/src/index.css';

export default function HomePage() {
  return (
    <div className="min-h-screen px-4 py-32 bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Judul */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-2">
          Lorem ipsum fames fusce venenatis tellus
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-500 mb-10 px-2 sm:px-6">
          Lorem ipsum dolor sit amet consectetur. At sagittis semper duis sed curabitur vitae id enim diam.
          Condimentum ultricies nunc mauris egestas leo tempus congue dictum.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Nama Anak */}
          <div className="space-x-2">
            <label className="block mb-2 font-medium text-sm sm:text-base">Nama Anak</label>
            <input
              type="text"
              placeholder="Masukan nama anak"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="relative">
            <label className="block mb-2 font-medium text-sm sm:text-base">Jenis Kelamin</label>
            <select
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 pr-10"
            >
              <option value="" disabled selected>Pilih jenis kelamin</option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>

          {/* Umur */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Umur</label>
            <input
              type="number"
              min="0"
              placeholder="0"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Berat Lahir */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Berat Lahir (kg)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="0,00"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Tinggi Badan */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Tinggi Badan (cm)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              placeholder="0,00"
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Riwayat Pemberian ASI */}
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">Riwayat Pemberian ASI</label>
            <select
              className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="" disabled selected>Pilih jawaban</option>
              <option value="eksklusif">Ya</option>
              <option value="parsial">Tidak</option>
            </select>
          </div>

          {/* Tombol Prediksi */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-sky-400 hover:bg-sky-500 text-white rounded shadow transition-all"
            >
              Prediksi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}