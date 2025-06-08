import { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import About from "./components/About";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Projects from "./components/Projects";
import CP from "./components/CP";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <>
      <Header onHamburgerClick={() => setSideNavOpen(true)} isMenuOpen={sideNavOpen} />
      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />
      <About />
      <Skills />
      <Academics />
      <Projects />
      <CP />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
