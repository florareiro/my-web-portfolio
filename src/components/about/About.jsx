import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { InView } from "react-intersection-observer";
const About = () => {
  const { darkMode, language, data } = useAppContext();
  const { about, hero } = data;

  return (
    // md:w-[200px] flex md:hidden font-semibold text-5xl py-6
    // {about.text[language]}
    <>
      <section
        id="about"
        className=" container grid grid-cols-1 md:grid-cols-3 md:gap-x-28 md:py-20"
      >
        <h1
          className={`
              w-[200px] flex md:hidden font-semibold text-5xl py-6`}
        >
          {about.text[language]}
        </h1>

        <div className="flex col-span-2">
          <p className="text-lg md:text-2xl md:pe-20 md:leading-9">
            {hero.text[language]}
          </p>
        </div>
        <div className="flex md:justify-end justify-start items-center py-3 ">
          <h1
            className={` md:w-[200px] hidden md:flex mt-12 md:mt-0 font-semibold text-6xl md:text-7xl lg:text-8xl xl:text-8xl $`}
          >
            {about.text[language]}
          </h1>
        </div>
      </section>
      <div className="container flex flex-col justify-center items-center text-start md:text-center mb-8 md:mb-20 gap-y-4">
        <InView>
          {({ inView, ref }) => (
            <h2
              ref={ref}
              className={`${
                darkMode ? "bg-lightmode-500" : "bg-lightmode-200"
              } w-full h-[90px] lg:h-[104px] flex md:justify-center items-center text-xl md:text-3xl lg:text-4xl py-4 px-4 rounded-md ${
                inView ? "animate-about1" : ""
              }`}
            >
              {about.desc[0][language]}
            </h2>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <h2
              ref={ref}
              className={`${
                darkMode
                  ? "bg-lightmode-500 text-white"
                  : "bg-[#FF6D1B] text-white"
              } w-full   flex  md:justify-center items-center h-[90px]  lg:h-[104px] text-xl md:text-3xl lg:text-4xl py-4 px-4 rounded-md ${
                inView ? "animate-about2" : ""
              }`}
            >
              {about.desc[1][language]}
            </h2>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <h2
              ref={ref}
              className={`${
                darkMode ? "bg-lightmode-500" : "bg-lightmode-500 text-white"
              } w-full  flex md:justify-center items-center h-[90px]  lg:h-[104px] text-xl md:text-3xl lg:text-4xl py-4 px-4 rounded-md ${
                inView ? "animate-about1" : ""
              }`}
            >
              {about.desc[2][language]}
            </h2>
          )}
        </InView>
      </div>
    </>
  );
};

export default About;
