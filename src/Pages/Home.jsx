import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="px-2 md:px-0">
        <Banner></Banner>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;