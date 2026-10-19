import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages/homepage/Home";
import Services from "./pages/servicespage/services";
function App() {

  return (
    <>
    <Navbar />
     <Routes> 
     <Route path="/" element={<Home />} />
     <Route path="/Services" element={<Services />} />
      
      </Routes>
    <Footer />
    </>
  )
}

export default App
