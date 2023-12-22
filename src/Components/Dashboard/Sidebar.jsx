import { useState } from "react";
import logo from "../../assets/task-logo.png";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { CgGoogleTasks } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Sidebar = () => {
  const { logOut, user } = useAuth();
  const [isActive, setActive] = useState(false);
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to={"/"}>
              <img src={logo} className="max-w-[100px]" alt="logo" />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-68 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link to={"/"}>
                <img src={logo} className="max-w-[150px]" alt="logo" />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <NavLink
                to={"/dashboard/task-manager"}
                end
                className={({ isActive }) =>
                  `flex items-center px-2 py-2 my-5  transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <CgGoogleTasks size={20}></CgGoogleTasks>
                <span className="mx-4 font-medium">Task Manager</span>
              </NavLink>
              <NavLink
                to={"/dashboard/show-task"}
                end
                className={({ isActive }) =>
                  `flex items-center px-2 py-2 my-5  transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaTasks size={20}></FaTasks>
                <span className="mx-4 font-medium">See Task</span>
              </NavLink>
            </nav>
          </div>
        </div>
        <div>
          <div className="divider divider-warning">Profile</div>

          <div className=" mt-5 ml-4">
            <div className="avatar online">
              <div className="w-16 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>

          <Link to={'/'}>
            <button
              onClick={logOut}
              className="flex w-full items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
