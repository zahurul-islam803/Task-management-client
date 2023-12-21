import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn btn-secondary btn-sm" : "btn btn-ghost btn-sm"
        }
      >
        Home
      </NavLink>
    </>
  );
};

export default NavLinks;