import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import PrivacyPolicy from "./pages/kebijakan-privasi"

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  )
}

export default App
