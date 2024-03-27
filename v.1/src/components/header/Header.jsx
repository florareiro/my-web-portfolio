import React, { useState } from "react";
import { useAppContext } from "../../hooks/AppContext";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const { darkMode, language, data } = useAppContext();
  const { header } = data;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`${
        darkMode ? "bg-darkmode-300 dark-text" : "bg-lightmode-100 light-text"
      } h-[80px] flex items-center fixed z-20 w-full`}
    >
      <nav className="container flex justify-between text-xl">
        <div className="w-full hidden md:flex items-center">
          <h1 className="font-thin ">
            Cecília Flora -<span className="font-semibold"> Dev</span>
          </h1>
        </div>
        <div className="flex gap-x-4 items-center justify-start md:justify-center  w-full">
          <ThemeSwitcher />

          <LanguageSwitcher />
        </div>
        <div className=""></div>

        <div className=" w-full flex justify-end">
          {/* Web Menu */}
          <ul className="hidden lg:flex gap-x-4">
            {header.menu[language].map((menuItem, index) => (
              <li key={index}>{menuItem}</li>
            ))}
          </ul>
          {/* Web Menu */}

          {/* Mobile Menu */}
          <div className="flex lg:hidden">
            <button onClick={toggleMenu}>
              <RiMenu3Line size={35} />
            </button>
          </div>
          {showMenu && (
            <div
              className={`${
                darkMode ? "bg-darkmode-200" : "bg-gray-50"
              } block shadow-xl  lg:hidden absolute top-[80px] h-screen py-4 w-[70%] text-end right-0`}
            >
              <div className="container">
                <ul className="md:container flex flex-col gap-y-1">
                  {header.menu[language].map((menuItem, index) => (
                    <li key={index}>{menuItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {/* Mobile Menu */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
