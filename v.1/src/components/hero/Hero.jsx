import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { InView } from "react-intersection-observer";
const Hero = () => {
  const { darkMode, language, data } = useAppContext();
  const { hero } = data;
  return (
    <div
      className={`${
        darkMode ? "bg-dark-bg " : "bg-light-bg text-white"
      } mt-[80px] bg-cover md:h-[65vh] flex justify-center items-center py-8"`}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-12 items-center">
        <div className="flex items-center justify-center text-center md:text-start overflow-hidden">
          {/* titulo  */}
          <InView>
            {({ inView, ref }) => (
              <h1
                ref={ref}
                className={`${
                  inView ? "animate-glitch" : ""
                } w-[350px] md:w-full  font-semibold px-4 md:px-0 py-6 text-5xl md:text-7xl lg:text-8xl xl:text-9xl`}
              >
                {hero.title[language]}
              </h1>
            )}
          </InView>
          {/* titulo  */}
        </div>
        <div className="flex flex-col items-center md:justify-end xl:justify-normal md:items-end  pb-4 md:py-8 xl:py-4">
          <img
            width={450}
            height={450}
            className="object-cover"
            src={hero.images[0].path}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
