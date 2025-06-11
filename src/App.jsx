import NavbarUser from "./components/NavbarUser";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
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
      <HomePage />

      {/* Footer */}
      <Footer />
    </div>
  )
};
