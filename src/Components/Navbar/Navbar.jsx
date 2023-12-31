import { Link } from 'react-router-dom';
import logo from '../../assets/task-logo.png'
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLinks></NavLinks>
          </ul>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <img src={logo} alt="logo" className="w-[50px]" />
          <a className="text-xl font-medium text-gray-700">TaskUnity</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks></NavLinks>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/dashboard'} className="text-lg text-rose-500 underline mr-6">Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;