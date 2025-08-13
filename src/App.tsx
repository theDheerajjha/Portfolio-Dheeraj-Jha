import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/theme.scss";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Experience />
        {/* Skills removed per request */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
