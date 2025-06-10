import children from '../assets/children.svg';
import arrowRight from '../assets/arrow-right.svg';
import momAndChild from '../assets/mom-child.svg';

export default function HomePage() {
  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-16 py-12">
        {/* Left Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900 mb-6">
            Lorem ipsum <br />
            fames fusce <br />
            venenatis tellus.
          </h1>
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. At sagittis semper duis sed curabitur vitae id enim diam. 
            Condimentum ultricies nunc mauris egestas leo tempus congue dictum.
          </p>
          <button className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition">
            Cek Pertumbuhan Si Kecil
            <img  src={arrowRight} className="ml-2" />
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="overflow-hidden">
            <img
              src={children}
              alt="Anak-anak bahagia"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="bg-white text-center px-6 py-24">
        <h2 className="text-blue text-xl font-semibold mb-4">Tentang Kami</h2>
        <p className="max-w-2xl mx-auto text-black mb-10">
          Lorem ipsum dolor sit amet consectetur. Scelerisque aenean etiam risus integer pharetra. 
          Sagittis tincidunt nascetur donec diam euismod vitae elit sed proin. 
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={momAndChild}
            alt="Ibu dan Anak"
            className="md:w-1/2"
          />
          <div className="md:w-1/2 text-left space-y-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. 
              In vulputate commodo feugiat felis turpis et ac metus. 
              Id maecenas et magna luctus velit bibendum. 
              Maecenas consequat phasellus proin tellus sapien. 
              Commodo tellus tellus mauris sit at at. 
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. 
              In vulputate commodo feugiat felis turpis et ac metus. 
              Id maecenas et magna luctus velit bibendum. 
              Maecenas consequat phasellus proin tellus sapien. 
              Commodo tellus tellus mauris sit at at. 
            </p>
          </div>
        </div>
      </section>

      {/* Visi dan Misi */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border shadow-sm">
            <h4 className="font-semibold text-sky-500">Visi Kami</h4>
              <p className="text-sm text-gray-600">
                In vulputate commodo feugiat felis turpis et ac metus.
              </p>
          </div>
          <div className="p-4 rounded-xl border shadow-sm">
            <h4 className="font-semibold text-sky-500">Misi Kami</h4>
              <p className="text-sm text-gray-600">
                In vulputate commodo feugiat felis turpis et ac metus.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center mt-6">
          <div>
            <p className="text-xl font-bold text-sky-500">94%</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div>
            <p className="text-xl font-bold text-sky-500">70M+</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div>
            <p className="text-xl font-bold text-sky-500">10K+</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
      </section>



      {/* Artikel Kesehatan */}
      <section className="px-6 py-16">
        <h2 className="text-sky-500 text-xl font-semibold mb-4">Artikel Kesehatan</h2>
        <div className="space-y-8">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex flex-col md:flex-row gap-6 items-center border rounded-lg p-4 shadow-sm"
            >
              <img
                src={`/artikel-${item}.jpg`}
                alt={`Artikel ${item}`}
                className="w-full md:w-1/3 rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">
                  Scelerisque aenean etiam risus integer pharetra
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Lorem ipsum dolor sit amet consectetur. Aliquet arcu eget elit risus
                  sit aenean sed commodo.
                </p>
                <button className="text-sm text-black border px-4 py-2 rounded-full">
                  Selengkapnya
                </button>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              Tampilkan lebih banyak
            </button>
          </div>
        </div>
      </section>

      {/* Daftar Bidan */}
      <section className="bg-gray-50 px-6 py-16">
        <h2 className="text-sky-500 text-xl font-semibold text-center mb-4">Daftar Bidan</h2>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow">
              <img src={`/map-${i}.jpg`} alt={`Lokasi ${i}`} className="rounded-lg mb-4" />
              <h4 className="font-semibold mb-2">
                Lorem ipsum ante blandit varius fusce
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Lorem ipsum cursus sapien cursus ut urna aliquam tristique sed.
              </p>
              <button className="text-sm text-black border px-4 py-2 rounded-full">
                Detail lokasi
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Tampilkan lebih banyak bidan
          </button>
        </div>
      </section>

      {/* Testimoni */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-sky-500 text-xl font-semibold mb-4">Testimoni</h2>
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border shadow-sm max-w-md mx-auto"
            >
              <p className="text-sm text-gray-600 mb-4">
                “Lorem ipsum dolor sit amet consectetur. Aliquet arcu eget elit risus
                sit aenean sed commodo.”
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={`/user-${i}.jpg`}
                  alt={`User ${i}`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold">Nama User</p>
                  <p className="text-xs text-gray-500">Lorem ipsum dis</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};