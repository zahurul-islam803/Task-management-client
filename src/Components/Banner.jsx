import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import useAuth from "../Hooks/useAuth";
const Banner = () => {
  const {user} = useAuth();
  return (
    <div className="relative">
      <img src={banner} className="w-full h-screen" alt="banner image" />
      {user?.email ? (
        <Link to={'/dashboard'}>
          <button className="btn md:btn-lg bg-rose-500 border-none hover:bg-rose-500 hover:rounded-badge text-white  absolute bottom-[200px] left-3/4">
            Let’s Explore{" "}
            <MdOutlineArrowOutward className="hidden md:block"></MdOutlineArrowOutward>
          </button>
        </Link>
      ) : (
        <Link to={"/login"}>
          {" "}
          <button className="btn md:btn-lg bg-rose-500 border-none hover:bg-rose-500 hover:rounded-badge text-white  absolute bottom-[200px] left-3/4">
            Let’s Explore{" "}
            <MdOutlineArrowOutward className="hidden md:block"></MdOutlineArrowOutward>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Banner;
