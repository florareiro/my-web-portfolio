import React from "react";
import { useAppContext } from "../hooks/AppContext";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
const Home = () => {
  const { darkMode } = useAppContext();

  return (
    <main
      className={`${
        darkMode ? "bg-darkmode-200 dark-text" : "bg-white light-text"
      } h-full `}
    >
      {/* hero  */}
      <Hero />
      {/* hero  */}
      <div
        className={`${darkMode ? "bg-darkmode-200" : "bg-lightmode-100"}h-full`}
      >
        {/* about  */}
        <About />
        {/* about  */}

        {/* services  */}
        <Services />
        {/* services  */}

        {/* contact  */}
        <Contact />
        {/* contact  */}

        {/* projects  */}
        <Projects />
        {/* projects  */}
      </div>
    </main>
  );
};

export default Home;
