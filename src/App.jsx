import NavbarUser from "./components/NavbarUser";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import PredictPage from "./pages/PredictPage"
import Footer from "./components/Footer"

// export default function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />

//       {/* Content */}
//       <HomePage />

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// };

export default function AppLogIn() {
  return (
    <div>
      {/* Navbar */}
      <NavbarUser />

      {/* Content */}
      <PredictPage />

      {/* Footer */}
      <Footer />
    </div>
  )
};
