import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import ContactUs from "./pages/kontak-kami"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontak-kami" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};
