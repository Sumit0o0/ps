import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [localTheme, setLocalTheme] = useState(localStorage.getItem("theme"));
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isTheme, setIsTheme] = useState(false);

  const lighTheme = () => {
    localStorage.setItem("theme", "light");
    setLocalTheme("light");
    setIsTheme(false);
  };

  const darkTheme = () => {
    localStorage.setItem("theme", "dark");
    setLocalTheme("dark");
    setIsTheme(false);
  };

  const systemTheme = () => {
    localStorage.removeItem("theme");
    if (theme) {
      setLocalTheme("dark");
    } else {
      setLocalTheme("light");
    }
    setIsTheme(false);
  };

  useEffect(() => {
    if (
      localTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [localTheme]);
  return (
    <header className="border-b p-2 md:p-6 border-zinc-900 dark:border-zinc-100">
      <div className="flex justify-between">
        <Link to="/ps" className="text-3xl">
          👨🏿
        </Link>
        <div className="flex my-auto gap-x-3">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <div id="theme" className="relative">
            <button onClick={() => setIsTheme(!isTheme)} className="">
              {localTheme === "dark" ? (
                <span className="material-symbols-outlined">dark_mode</span>
              ) : (
                <span className="material-symbols-outlined">light_mode</span>
              )}
            </button>
            {isTheme && (
              <div className="border border-gray-600 dark:border-gray-200 dark:text-black absolute right-0 bg-gray-200 z-50">
                <button
                  onClick={darkTheme}
                  className="flex w-full gap-x-2 px-2 py-1 hover:bg-gray-600">
                  <span className="material-symbols-outlined">dark_mode</span>
                  <span>Dark</span>
                </button>
                <button
                  onClick={lighTheme}
                  className="flex w-full gap-x-2 px-2 py-1 hover:bg-gray-600">
                  <span className="material-symbols-outlined">light_mode</span>
                  <span>Light</span>
                </button>
                <button
                  onClick={systemTheme}
                  className="flex w-full gap-x-2 px-2 py-1 hover:bg-gray-600">
                  <span className="material-symbols-outlined">computer</span>
                  <span>System</span>
                </button>
              </div>
            )}
          </div>
          <a className="bg-teal-700 px-2 shadow-[2px_2px_0_0] shadow-teal-500" href="https://drive.google.com/file/d/1OBeYFOuNrAOiQF-Tr1hkdcrIpwaexpHS/view?usp=sharing" target="_blank">Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
