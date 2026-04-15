import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr className="section-line" />
      <Projects />
      <hr className="section-line" />
      <About />
      <hr className="section-line" />
      <Contact />
    </div>
  );
}

export default App;
