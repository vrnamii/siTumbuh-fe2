import React from "react";
import '/src/index.css';
import dokter1 from "../assets/dokter-1.svg";
import GraduationCap from "../assets/graduation-cap.svg";
import marker from "../assets/marker-2.svg";
import calendar from "../assets/calendar.svg";
import passport from "../assets/passport.svg";
import dokter2 from "../assets/dokter-1.svg";



export default function DetailBidan({ data = defaultData }) {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-32 pb-10 ">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[var(--color-blue)] mb-2">
        Detail Informasi Bidan
      </h2>
      <p className="text-center text-[var(--color-darkgrey)] mb-8">
        Informasi lengkap mengenai tenaga kesehatan yang tersedia.
      </p>

      <div className="bg-white rounded-3xl shadow-md border-2 border-[var(--color-grey)] p-6 md:flex gap-8">
        {/* Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={dokter2}
            alt="Dokter"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        {/* Detail */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-blue)]">
            {data.nama}
          </h3>
          <p className="text-lg font-semibold">Rp {data.harga?.toLocaleString() || '-'}</p>

          <div className="flex items-center gap-1 text-[var(--color-yellow)]">
            {'★'.repeat(data.rating || 0)}{'☆'.repeat(5 - (data.rating || 0))}
          </div>

          <div className="flex gap-2 text-sm">
            <span className="border px-3 py-1 rounded-full text-[var(--color-darkgrey)]">{data.profesi || 'Bidan'}</span>
          </div>

          <div className="text-sm">
            <div className="flex gap-4 items-start pt-4">
              <img src={GraduationCap} alt="toga" className="w-6" />
                <div className="p-0 mt-0">
                  <p className="font-medium text-lg "> Pendidikan</p>
                  <p className="text-[var(--color-darkgrey)]">
                    {data.pendidikan}
                  </p>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-4">
              <img src={marker} alt="toga" className="w-6" />
                <div className="p-0 mt-0">
                  <p className="font-medium text-lg "> Tempat Praktik</p>
                  <p className="text-[var(--color-darkgrey)]">
                    {data.tempat_praktik}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${data.lokasi.lat},${data.lokasi.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-[var(--color-blue)] underline text-xs hover:text-blue-700"
                  >
                  Lihat di Google Maps
                  </a>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-4">
              <img src={calendar} alt="toga" className="w-6" />
                <div className="p-0 mt-0">
                  <p className="font-medium text-lg ">Jadwal Praktik</p>
                  <p className="text-[var(--color-darkgrey)]">
                    {data.jadwal_praktik}
                  </p>
              </div>
            </div>

            <div className="flex gap-4 items-start pt-4">
              <img src={passport} alt="toga" className="w-6" />
                <div className="p-0 mt-0">
                  <p className="font-medium text-lg ">Nomor STR</p>
                  <p className="text-[var(--color-darkgrey)]">
                    {data.no_str}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Penilaian */}
      <ReviewSection />
    </div>
  );
}

function ReviewSection() {
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState("");
  const [reviews, setReviews] = React.useState([
    {
      name: 'Sara Mann',
      role: 'Pasien',
      content: 'Lorem ipsum dolor sit amet consectetur. Aliquet arcu eget elit risus sit aenean sed commodo. Ultricies platea tincidunt condimentum sapien massa ante. Faucibus et tempus urna id quis phasellus id.',
      time: '2 menit yang lalu',
    },
    {
      name: 'Dewi Lestari',
      role: 'Pasien',
      content: 'Dokter sangat ramah dan profesional. Penjelasan mengenai kondisi anak sangat membantu.',
      time: '1 hari yang lalu',
    },
    {
      name: 'John Doe',
      role: 'Pasien',
      content: 'Pelayanan yang sangat memuaskan. Dokter menjelaskan dengan sangat rinci dan jelas.',
      time: '3 hari yang lalu',
    },
    {
      name: 'Jane Smith',
      role: 'Pasien',
      content: 'Sangat profesional dan perhatian. Saya merasa sangat diperhatikan selama konsultasi.',
      time: '5 hari yang lalu',
    },
    {
      name: 'Michael Brown',
      role: 'Pasien',
      content: 'Dokter yang sangat berpengalaman. Saya mendapatkan banyak informasi berguna.',
      time: '1 minggu yang lalu',
    },
    {
      name: 'Emily White',
      role: 'Pasien',
      content: 'Klinik yang sangat bersih dan nyaman. Dokter sangat ramah dan membantu.',
      time: '2 minggu yang lalu',
    },
  ]);
  const [success, setSuccess] = React.useState(false);
  const [showAll, setShowAll] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || review.trim() === "") return;
    setReviews([
      {
        name: 'Anda',
        role: 'Pasien',
        content: review,
        time: 'Baru saja',
      },
      ...reviews,
    ]);
    setSuccess(true);
    setReview("");
    setRating(0);
    setTimeout(() => setSuccess(false), 2000);
  };

  const reviewsToShow = showAll ? reviews : reviews.slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-blue)] mb-2">
        Penilaian
      </h2>
      <p className="text-[var(--color-darkgrey)] mb-6">
        Bagikan pengalaman Anda dengan dokter ini.
      </p>

      {/* Form Penilaian */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg border-2 border-[var(--color-grey)] rounded-2xl p-6 mb-10">
        <h3 className="text-lg font-semibold text-[var(--color-blue)] mb-1">Bagikan Pengalaman Anda</h3>
        <div className="flex items-center gap-2 mb-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              type="button"
              key={num}
              className={`text-xl transition-colors ${num <= rating ? 'text-[var(--color-yellow)]' : 'text-gray-300'}`}
              onClick={() => setRating(num)}
              aria-label={`Beri rating ${num}`}
            >
              ★
            </button>
          ))}
        </div>
        <textarea
          className="bg-[var(--color-grey)] w-full border-1 border-[var(--color-grey)] rounded-xl p-3 text-sm text-[var(--color-darkgrey)] resize-none h-16 mb-4"
          placeholder="Ketikkan pengalaman Anda"
          value={review}
          onChange={e => setReview(e.target.value)}
        />
        <div className="text-right">
          <button
            type="submit"
            className="bg-[var(--color-blue)] hover:bg-sky-600 text-white px-6 py-2 rounded-full text-sm"
            disabled={rating === 0 || review.trim() === ""}
          >
            Kirim
          </button>
        </div>
        {success && <div className="text-green-600 text-sm mt-2">Terima kasih atas ulasan Anda!</div>}
      </form>

      {/* Daftar Review */}
      {reviewsToShow.map((review, index) => (
        <div key={index} className="bg-white rounded-xl border-2 border-[var(--color-grey)] shadow-md p-4 mb-4">
          <div className="flex items-center gap-4 mb-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-[var(--color-darkgrey)]">{review.role}</p>
            </div>
            <div className="ml-auto text-[var(--color-yellow)] text-sm">
              {'★'.repeat(5)}
            </div>
          </div>
          <p className="text-sm text-black mb-2">{review.content}</p>
          <p className="text-xs text-[var(--color-darkgrey)]">{review.time}</p>
        </div>
      ))}

      {/* Tombol Tampilkan Lebih Banyak */}
      {reviews.length > 4 && !showAll && (
        <div className="text-center mt-6">
          <button
            className="bg-black text-white text-sm px-5 py-2 rounded-md flex items-center gap-2 mx-auto hover:bg-[var(--color-darkgrey)]"
            onClick={() => setShowAll(true)}
          >
            Tampilkan lebih banyak
          </button>
        </div>
      )}
    </div>
  );
}

// Default data untuk development/frontend
const defaultData = {
  nama: "Louis Murazik Am.Keb",
  harga: 100000,
  rating: 5,
  profesi: "Bidan",
  pengalaman: 16,
  pendidikan: "D3 Kebidanan Universitas Indonesia",
  tempat_praktik: "Klinik Sehat Ibu dan Anak, Jakarta",
  jadwal_praktik: [
    "Senin–Rabu: 08.00–14.00",
    "Kamis–Jumat: 14.00–20.00"
  ],
  no_str: "1-383-716-6217",
  foto_url: "/doctor.png",
  deskripsi: "Lorem ipsum dolor sit amet consectetur. Scelerisque aenean etiam risus integer pharetra.",
  lokasi: {
    lat: -6.2847,
    lng: 106.7829,
  },
};
