import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <div className="decorative-flowers-left">
        <img src="/send-hydrangeas-globalrose.png" alt="" />
      </div>
      <div className="decorative-flowers-right">
        <img src="/send-hydrangeas-globalrose.png" alt="" />
      </div>
    </div>
  );
}

export default App;
