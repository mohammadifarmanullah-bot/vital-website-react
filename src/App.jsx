import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/homepage/Home";
import Services from "./pages/servicespage/Services";
import About from "./pages/aboutpage/About";
function App() {

  return (
    <>
    <Navbar />
     <Routes> 
     <Route path="/" element={<Home />} />
     <Route path="/Services" element={<Services />} />
     <Route path="/About" element={<About />} />
      
      </Routes>
    <Footer />
    </>
  )
}

export default App
