import About from "./Components/About";
import Cross from "./Components/Cross";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Work from "./Components/Work";
import './index.css'


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Work/>
    <Cross/>
    <Projects/>
    <Footer/>
    </>
  );
}

export default App;
