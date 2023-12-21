import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-lg text-rose-500 underline mr-6"
            : "text-lg text-gray-700 hover:text-rose-400 mr-6"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-lg text-rose-500 underline mr-6"
            : "text-lg text-gray-700 hover:text-rose-400 mr-6"
        }
      >
        Services
      </NavLink>
    </>
  );
};

export default NavLinks;