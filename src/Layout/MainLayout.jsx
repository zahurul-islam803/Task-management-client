import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="px-2 md:px-0">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;