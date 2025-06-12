import '/src/index.css';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import location from "../assets/location-pin.svg";
import phoneNumber from '../assets/phone.svg';
import email from '../assets/mail-01.svg';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-grey)] text-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo dan Kontak */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/situmbuh.svg" alt="SiTumbuh Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-[var(--color-blue)]">SiTumbuh</span>
          </div>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <img src={location} className="mr-2" />
              <span className="max-w-[240px]">2715 Beahan Burgs, Port Boydfurt 61272–5992</span>
            </li>
            <li className="flex items-center">
              <img src={phoneNumber} className="mr-2" /> 499 798 7150 x403
            </li>
            <li className="flex items-center">
              <img src={email} className="mr-2" /> situmbuh@gmail.com
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-4 text-2xl text-[var(--color-blue)]">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* SiTumbuh Links */}
        <div>
          <h3 className="text-[var(--color-blue)] font-semibold mb-4">SiTumbuh</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[var(--color-blue)]">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-[var(--color-blue)]">Artikel Kesehatan</a></li>
            <li><a href="#" className="hover:text-[var(--color-blue)]">Daftar Bidan</a></li>
            <li><a href="#" className="hover:text-[var(--color-blue)]">Cek Risiko Stunting</a></li>
          </ul>
        </div>

        {/* Bantuan & Panduan */}
        <div>
          <h3 className="text-[var(--color-blue)] font-semibold mb-4">Bantuan & Panduan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[var(--color-blue)]">Kontak kami</a></li>
            <li><a href="/kebijakan-privasi" className="hover:text-[var(--color-blue)]">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-[var(--color-blue)]">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-[var(--color-blue)]">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[var(--color-blue)] text-white text-center py-4 text-sm px-4">
        ©2025 SiTumbuh. All rights reserved
      </div>
    </footer>
  )
};