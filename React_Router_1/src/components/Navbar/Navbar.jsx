import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = ["Home", "About", "Contact", "Github"];

  return (
    <main className="relative">
      <nav className="sticky top-8 py-3 px-8 mx-auto text-lg font-semibold flex justify-between items-center shadow-md w-11/12 bg-white">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Logo"
          className="sm:w-[130px]"
        />
        <div className="flex gap-4 z-50">
          {navLinks.map((nav) => (
            <NavLink
              key={nav}
              to={`/${nav}`}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-gray-700"
              }
            >
              {nav}
            </NavLink>
          ))}
        </div>
      </nav>
      <p>4</p>
    </main>
  );
}

export default Navbar;
