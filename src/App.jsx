import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SyaratKetentuan from "./pages/syarat-ketentuan.jsx"; 

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
        {/* Rute lain bisa ditambahkan di sini */}
      </Routes>
      <Footer />
    </Router>
  );
}
