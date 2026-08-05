import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [role, setRole] = useState("designer");

  return (
    <div className="app">
      <Header role={role} setRole={setRole} />
      <main>
        <Hero role={role} />
        <About />
        <Education />
        <Skills role={role} />
        <Portfolio role={role} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
