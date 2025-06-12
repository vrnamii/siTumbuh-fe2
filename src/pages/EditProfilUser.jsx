import '/src/index.css';
import React, { useRef, useState } from 'react';
import person1 from '../assets/person-1.svg';
import EditPicture from '../assets/edit-picture.svg';
import { useNavigate } from 'react-router-dom';

export default function EditProfilUser() {
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

  // State for image upload and preview
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const fileInputRef = useRef(null);

  function handleEdit(e) {
    e.preventDefault();
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
    // navigate('/edit-profil'); // Only navigate if needed
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

  function handleEditPictureClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 pt-32 pb-20">
      <h2 className="text-center text-[var(--color-blue)] text-2xl font-semibold mb-6">Edit Profil Pengguna</h2>

      {/* Foto Profil */}
      <div className="flex flex-col items-center py-10 justify-center mb-6 gap-4">
        <div className="w-32 h-32 rounded-full bg-[var(--color-grey)] overflow-hidden relative group">
          <img
            src={previewUrl || person1}
            alt="Foto Profil"
            className="w-32 h-32 rounded-full object-cover"
          />
          <label htmlFor="profile-image-upload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <img src={EditPicture} className="h-8" alt="Edit" />
          </label>
          <input
            id="profile-image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <span className="text-sm text-[var(--color-darkgrey)] pt-4">Klik untuk mengubah foto profil</span>
      </div>

      <form className="space-y-8 pb-24" onSubmit={handleEdit}>
        {/* Data Diri */}
        <div>
          <h3 className="text-[var(--color-blue)] font-semibold text-lg mb-4">Data Diri</h3>
          <div className="space-y-4">
            <input type="text" value={user.nama} disabled className="w-full p-3 rounded-md bg-[var(--color-grey)] outline-none text-[var(--color-darkgrey)]" />
            <input type="email" value={user.email} disabled className="w-full p-3 rounded-md bg-[var(--color-grey)] outline-none text-[var(--color-darkgrey)]" />

            {/* Jenis Kelamin */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" checked={user.gender === 'Laki-Laki'} disabled className="accent-[var(--color-blue)]" />
                <span>Laki-Laki</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" checked={user.gender === 'Perempuan'} disabled className="accent-[var(--color-blue)]" />
                <span>Perempuan</span>
              </label>
            </div>

            <input type="date" defaultValue={user.tanggalLahir} placeholder="Tanggal Lahir" className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.pekerjaan} placeholder="Pekerjaan" className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.telepon} placeholder="No. Telepon" className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
          </div>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="text-[var(--color-blue)] font-semibold text-lg mb-4">Alamat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" defaultValue={user.alamat.negara} placeholder="Negara" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.alamat.provinsi} placeholder="Provinsi" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.alamat.kabupaten} placeholder="Kabupaten/Kota" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.alamat.kecamatan} placeholder="Kecamatan" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.alamat.desa} placeholder="Desa" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.alamat.jalan} placeholder="Jalan" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.alamat.nomor} placeholder="Nomor" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
            <input type="text" defaultValue={user.alamat.kodepos} placeholder="Kode Pos" className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]" />
          </div>
        </div>

        {/* Tombol Ubah */}
        <div className="text-center">
          <button type="submit" className="bg-[var(--color-blue)] text-white px-6 py-2 rounded-md hover:bg-sky-500 transition">
            Simpan
          </button>
          {showSaved && (
            <div className="mt-4 text-green-600 font-semibold">Data telah tersimpan</div>
          )}
        </div>
      </form>
    </div>
  );
};