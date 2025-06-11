import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticlePage />} />

      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App
