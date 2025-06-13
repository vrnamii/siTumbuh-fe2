import NavbarUser from "./components/NavbarUser";
import EditProfilUser from "./pages/EditProfilUser";
import PredictionHistory from "./pages/PredictionHistory";
import ProfilUser from "./pages/ProfilUser";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import PredictPage from "./pages/PredictPage"
import NotStunting from "./components/PredictNotStunting"
import Stunting from "./components/PredictStunting"
import Faq from "./pages/Faq"
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

      {/* Profile User */}

      < Faq />
      
      {/* Footer */}
      <Footer />
    </div>
  )
};
