import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="px-2 md:px-0">
        <Banner></Banner>
      </div>
    </>
  );
};

export default Home;