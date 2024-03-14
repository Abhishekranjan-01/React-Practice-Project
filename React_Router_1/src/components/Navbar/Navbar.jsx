import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";

function Navbar() {
  // const navLinks = ["Home", "About", "Contact", "Github"];
  const [extended, setExtended] = useState(true);
  const navLinks = [
    { link: "/", page: "Home" },
    { link: "/About", page: "About" },
    { link: "/Contact", page: "Contact" },
    { link: "/Github", page: "Github" },
  ];
  console.log(extended);
  return (
    <nav className="fixed sm:sticky top-0 py-1 sm:py-3 px-2 sm:px-8 mx-auto text-lg font-semibold flex flex-col sm:flex-row justify-between items-center shadow-md w-full sm:w-11/12 bg-white">
      <div className="flex flex-row justify-between w-full relative">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Logo"
          className="max-sm:self-start w-[100px] sm:w-[130px]"
        />

        <div className=" w-fit relative -top-11">
          <Hamburger extended={extended} setExtended={setExtended} />
        </div>
      </div>

      <div
        className={
          (extended
            ? "max-sm:translate-x-[-100%]"
            : "max-sm:translate-x-[0] ") +
          ` max-sm:fixed top-0 left-0 max-sm:w-[35vw] max-sm:h-screen max-sm:bg-slate-200 flex flex-col max-sm:items-center max-sm:justify-evenly sm:flex-row gap-4 transition-all  duration-300 ease-in-out`
        }
      >
        {navLinks.map((nav) => (
          <NavLink
            key={nav.page}
            to={nav.link}
            className={({ isActive }) =>
              isActive ? "text-orange-500" : "text-gray-700"
            }
          >
            {nav.page}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
