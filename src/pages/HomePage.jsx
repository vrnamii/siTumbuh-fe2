import '/src/index.css';
import children from '../assets/children.svg';
import arrowRight from '../assets/arrow-right.svg';
import momAndChild from '../assets/mom-child.svg';
import vision from '../assets/eye.png';
import mission from '../assets/target.png';
import childVaccine from '../assets/child-vaccine.png';
import arrowUpLeft from '../assets/arrow-up-left.svg';
import person1 from '../assets/person-1.svg';
import star from '../assets/star-1.svg';
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="py-24 ">
      {/* Hero Section */}
      <section className="flex flex-col-reverse px-12 lg:flex-row items-center justify-between gap-8">
        {/* Left Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-black mb-6">
            Lorem ipsum <br />
            fames fusce <br />
            venenatis tellus.
          </h1>
          <p className="text-black mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. At sagittis semper duis sed curabitur vitae id enim diam. 
            Condimentum ultricies nunc mauris egestas leo tempus congue dictum.
          </p>
          <button className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition">
            Cek Pertumbuhan Si Kecil
            <img  src={arrowRight} className="ml-2 h-4 md:h-6" />
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
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
      <section className="bg-white text-center px-6 mt-6 md:px-16 py-12">
        <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 md:text-3xl">Tentang Kami</h2>
        <p className="max-w-2xl mx-auto text-black text-sm md:text-base mb-8">
          Lorem ipsum dolor sit amet consectetur. Scelerisque aenean etiam risus integer pharetra. 
          Sagittis tincidunt nascetur donec diam euismod vitae elit sed proin. 
        </p>
        <div className="flex flex-col md:flex-row items-center gap-0">
          <img
            src={momAndChild}
            alt="Ibu dan Anak"
            className="h-120 md:w-1/2"
          />
          <div className="md:w-1/2 text-left space-y-4">
            <p className="text-black text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. 
              In vulputate commodo feugiat felis turpis et ac metus. 
              Id maecenas et magna luctus velit bibendum. 
              Maecenas consequat phasellus proin tellus sapien. 
              Commodo tellus tellus mauris sit at at. 
            </p>
            <p className="text-black text-sm md:text-base">
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
      <section className="bg-[var(--color-grey)] text-center p-10 rounded-5xl mt-8 2xl:px-60 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6  border-[var(--color-grey)] border-1 rounded-xl shadow-sm hover:shadow-xl">
            <div className="flex items-center gap-6 text-left">
              <img src={vision} alt="eye" className="h-12"/>
              <div>
                <h4 className="font-semibold text-sky-500 ">Visi Kami</h4>
                <p className="text-black text-sm md:text-base">
                  In vulputate commodo feugiat felis turpis et ac metus.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6  border-[var(--color-grey)] border-1 rounded-xl shadow-sm hover:shadow-xl">
            <div className="flex items-center gap-6 text-left">
              <img src={mission} alt="target" className="h-12"/>
              <div>
                <h4 className="font-semibold text-sky-500 ">Misi Kami</h4>
                <p className=" text-black text-sm md:text-base">
                  In vulputate commodo feugiat felis turpis et ac metus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-10 text-sm md:text-base 2xl:px-60">Lorem ipsum dolor sit amet consectetur. 
            In vulputate commodo feugiat felis turpis et ac metus. 
            Id maecenas et magna luctus velit bibendum. 
            Maecenas consequat phasellus proin tellus sapien.</p>
        </div>
        <div className="grid grid-cols-3 text-center mt-10 2xl:px-60">
          <div>
            <p className="text-2xl font-bold text-[var(--color-blue)]">94%</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--color-blue)]">70M+</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--color-blue)]">10K+</p>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
      </section>

      {/* Artikel Kesehatan */}
      <section className="px-6 py-24 md:px-12 ">
        <div className="text-xl mb-8 md:text-3xl">
          <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 md:text-3xl">Artikel Kesehatan</h2>
          <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur. Scelerisque aenean etiam risus integer pharetra.</p>
        </div>
        <div className="space-y-0">
          <div className="flex flex-col md:flex-row gap-6 items-center border-y-2 border-[var(--color-grey)] p-10 ">
            <img
              src={childVaccine}
              alt="childVaccine 1"
              className="w-full md:w-1/3 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">
                Scelerisque aenean etiam risus integer pharetra
              </h3>
              <p className="text-black mb-3 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur. Aliquet arcu eget elit risus
                sit aenean sed commodo.
              </p>

              <div>
                <button className=" bg-white inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[var(--color-grey)]">
                  Selengkapnya
                  <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center border-y-2 border-[var(--color-grey)] p-10 ">
            <img
              src={childVaccine}
              alt="childVaccine 2"
              className="w-full md:w-1/3 rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">
                Scelerisque aenean etiam risus integer pharetra
              </h3>
              <p className="text-black mb-3 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur. Aliquet arcu eget elit risus
                sit aenean sed commodo.
              </p>

              <div>
                <button className=" bg-white inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[var(--color-grey)]">
                  Selengkapnya
                  <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/article"
              className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition"
            >
              Tampilkan lebih banyak artikel
              <img src={arrowRight} className="ml-2 h-4 md:h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Daftar Bidan */}
      <section className="px-6 md:px-12">
        <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 text-center md:text-3xl">Daftar Bidan</h2>
        <p className="text-center text-black mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-[var(--color-grey)] border-2 shadow-md  rounded-xl p-10 hover:shadow-xl">
            <h4 className="font-semibold mb-2">
              Lorem ipsum ante blandit varius fusce
            </h4>
            <p className="text-black mb-3 text-sm md:text-base">
              Lorem ipsum cursus sapien cursus ut urna aliquam tristique sed.
            </p>
            <div>
              <button className="inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base">
                Detail lokasi
                <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
              </button>
            </div>
          </div>
          <div className="bg-white border-[var(--color-grey)] border-2 shadow-md  rounded-xl p-10 hover:shadow-xl">
            <h4 className="font-semibold mb-2">
              Lorem ipsum ante blandit varius fusce
            </h4>
            <p className="text-black mb-3 text-sm md:text-base">
              Lorem ipsum cursus sapien cursus ut urna aliquam tristique sed.
            </p>
            <div>
              <button className="inline-flex items-center text-black border px-4 py-2 rounded-full text-sm md:text-base">
                Detail lokasi
                <img  src={arrowUpLeft} className="ml-2 h-4 md:h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
           <button className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition">
            Tampilkan lebih banyak bidan
            <img  src={arrowRight} className="ml-2 h-4 md:h-6" />
          </button>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 text-center px-4 md:px-16">
        <h2 className="text-[var(--color-blue)] text-xl font-semibold mb-4 text-center md:text-3xl">Testimoni</h2>
        <p className="text-black mb-10">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="overflow-x-auto scrollbar-hide px-2 md:px-6 py-8">
          <div className="flex gap-4 md:gap-6 lg:gap-8 justify-start min-w-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white border-[var(--color-grey)] border-2 p-6 md:p-10 rounded-xl shadow-sm max-w-xs min-w-[280px] md:min-w-[400px] lg:min-w-[600px] flex-shrink-0 hover:shadow-xl"
              >
                <p className="text-sm text-black mb-4 text-left">
                  “Lorem ipsum dolor sit amet consectetur. 
                  Aliquet arcu eget elit risus sit aenean sed commodo. 
                  Ultricies platea tincidunt condimentum sapien massa ante. 
                  Feugiat ac tempus urna id quis phasellus id.”
                </p>
                <div className="flex flex-col gap-1 mb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={person1}
                      alt={`person1 ${i}`}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold">Sara Mann</span>
                        <span className="flex items-center gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <img key={idx} src={star} alt="star" className="w-5 h-5" />
                          ))}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 text-left">Ibu rumah tangga</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};