import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = ["Home", "About", "Contact", "Github"];

  return (
    <main className="">
      <h1 className="text-center opacity-0">It's A H1</h1>
      <h2 className="text-center opacity-0">It's h2</h2>
      <nav className="sticky top-0 py-3 px-8 mx-auto text-lg font-semibold flex flex-col sm:flex-row justify-between items-center shadow-md w-full sm:w-11/12 bg-white">
        <img
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Logo"
          className="sm:w-[130px]"
        />
        <div className="flex flex-col sm:flex-row gap-4 ">
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
    </main>
  );
}

export default Navbar;
