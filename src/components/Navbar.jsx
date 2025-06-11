import { useState } from "react";
import { Link } from "react-router-dom";
import '/src/index.css';
import menu from "../assets/menu.svg";
import logo from '../assets/situmbuh.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="py-4 fixed top-0 left-0 w-full z-50"
      style={{
        background: "linear-gradient(to bottom, #fff 50%, rgba(255,255,255,0))",
        backdropFilter: "blur(2px)"
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo-situmbuh" className="h-12" />
          <h1 className="text-2xl font-bold text-[var(--color-blue)]">SiTumbuh</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={menu} className="text-3xl text-[var(--color-[var(--color-blue)])]" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-base font-regular text-black">
          <li><Link to="/" className="hover:font-medium hover:text-[var(--color-blue)]">Beranda</Link></li>
          <li><a href="#" className="hover:font-medium hover:text-[var(--color-[var(--color-blue)])]">Tentang Kami</a></li>
          <li><Link to="/article" className="hover:font-medium hover:text-[var(--color-blue)]">Artikel</Link></li>
          <li><a href="#" className="hover:font-medium hover:text-[var(--color-[var(--color-blue)])]">Daftar Bidan</a></li>
          <li><a href="#" className="hover:font-medium hover:text-[var(--color-[var(--color-blue)])]">Testimoni</a></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="px-4 py-2 border border-black text-black rounded hover:bg-[var(--color-grey)]">Masuk</a>
          <a href="#" className="px-4 py-2 bg-[var(--color-blue)] text-white rounded hover:text-black">Daftar</a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 px-6 space-y-3">
          <Link to="/" className="block bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular" onClick={() => setIsOpen(false)}>Beranda</Link>
          <a href="#" className="block bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Tentang Kami</a>
          <Link to="/article" className="block bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular" onClick={() => setIsOpen(false)}>Artikel</Link>
          <a href="#" className="block bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Daftar Bidan</a>
          <a href="#" className="block bg-[var(--color-grey)] rounded px-4 py-2 text-center font-regular">Testimoni</a>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="px-6 py-2 border border-black text-black rounded hover:bg-grey">Masuk</a>
            <a href="#" className="px-6 py-2 bg-[var(--color-blue)] text-white rounded hover:text-black">Daftar</a>
          </div>
        </div>
      )}
    </nav>
  );
}
