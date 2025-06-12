import '/src/index.css';
import person1 from '../assets/person-1.svg';
import { useNavigate } from 'react-router-dom';

export default function ProfilUser() {
  const navigate = useNavigate();
  // Dummy data user
  const user = {
    nama: 'Nama Pengguna',
    email: 'user@email.com',
    gender: 'Perempuan',
    tanggalLahir: '2000-01-01',
    pekerjaan: 'Pekerjaan',
    telepon: '08123456789',
    alamat: {
      negara: 'Indonesia',
      provinsi: 'Bali',
      kabupaten: 'Badung',
      kecamatan: 'Kuta',
      desa: 'Legian',
      jalan: 'Jl. Pantai',
      nomor: '10',
      kodepos: '80361',
    },
  };

  function handleEdit(e) {
    e.preventDefault();
    navigate('/edit-profil');
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 pt-32 pb-20">
      <h2 className="text-center text-sky-400 text-2xl font-semibold mb-6">Profil Pengguna</h2>

      {/* Foto Profil */}
      <div className="flex py-10 justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
          <img src={person1} alt="Foto Profil" className="w-32 h-32 rounded-full object-cover" />
        </div>
      </div>

      <form className="space-y-8 pb-24" onSubmit={handleEdit}>
        {/* Data Diri */}
        <div>
          <h3 className="text-sky-400 font-semibold text-lg mb-4">Data Diri</h3>
          <div className="space-y-4">
            <input type="text" value={user.nama} disabled className="w-full p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="email" value={user.email} disabled className="w-full p-3 rounded-md bg-gray-100 outline-none text-gray-400" />

            {/* Jenis Kelamin */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" checked={user.gender === 'Laki-Laki'} disabled className="accent-sky-400" />
                <span>Laki-Laki</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" checked={user.gender === 'Perempuan'} disabled className="accent-sky-400" />
                <span>Perempuan</span>
              </label>
            </div>

            <input type="date" value={user.tanggalLahir} disabled className="w-full p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.pekerjaan} disabled className="w-full p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.telepon} disabled className="w-full p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
          </div>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="text-sky-400 font-semibold text-lg mb-4">Alamat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" value={user.alamat.negara} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.alamat.provinsi} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.alamat.kabupaten} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.alamat.kecamatan} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.alamat.desa} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.alamat.jalan} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.alamat.nomor} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
            <input type="text" value={user.alamat.kodepos} disabled className="p-3 rounded-md bg-gray-100 outline-none text-gray-400" />
          </div>
        </div>

        {/* Tombol Ubah */}
        <div className="text-center">
          <button type="submit" className="bg-sky-400 text-white px-6 py-2 rounded-md hover:bg-sky-500 transition">
            Ubah
          </button>
        </div>
      </form>
    </div>
  );
};