import '/src/index.css';
import tryAgain from "../assets/reset.svg";
import arrowRightBlack from '../assets/arrow-right-black.svg';

export default function Stunting() {
  return (
    <div class="min-h-0 bg-white px-4 flex justify-center pb-24 pt-8">
        <div class="w-full max-w-4xl">
            {/*Judul*/}
            <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-2 text-sky-400">
            Hasil Prediksi
            </h1>
            <p class="text-[var(--color-darkgrey)] mb-8 text-center text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Scelerisque aenean etiam risus integer pharetra.
            </p>

            {/*Box Hasil*/}
            <div class="bg-gray-100 rounded-3xl p-6 sm:p-10 shadow-md">
                <h2 class="text-lg sm:text-2xl font-semibold text-center text-sky-400 mb-4">
                    Stunting
                </h2>
                <p class="text-sm sm:text-base text-justify text-black mb-10 px-2 sm:px-6">
                    Lorem ipsum dolor sit amet consectetur. Cursus donec lectus dui cursus egestas est senectus. Et enim leo purus neque non.
                    Placerat orci consectetur eget accumsan imperdiet eget arcu diam sed. Cras ante integer mi leo urna consectetur lacus hendrerit proin.
                    Rhoncus facilisi suspendisse felis quis et duis eget in nulla. Arcu adipiscing leo mi mauris.
                    At ac porta lectus sed eget nisl. Varius non interdum arcu dictum lectus nulla sem.
                    Aliquam eleifend condimentum dignissim imperdiet scelerisque massa tempor integer tempus.
                </p>
                <div class="flex justify-center mt-8">
                    <button className="inline-flex items-center border-1 text-black px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-[var(--color-darkgrey)]">
                        Konsultasi dengan bidan
                        <img  src={arrowRightBlack} className="ml-2 h-4 md:h-6" />
                    </button>
                </div>
            </div>

            {/*Tombol Coba Lagi*/}
            <div class="flex justify-center mt-8">
                <button className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition">
                    Coba Lagi
                    <img  src={tryAgain} className="ml-2 h-4 md:h-6" />
                </button>
            </div>
        </div>
    </div>
  );
}