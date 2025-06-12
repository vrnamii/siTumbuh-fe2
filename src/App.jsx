import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import DaftarBidan from "./pages/daftar-bidan"
import DetailBidan from "./pages/DetailBidan"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <DaftarBidan />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
