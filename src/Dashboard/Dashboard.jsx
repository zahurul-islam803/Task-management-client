import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Helmet } from "react-helmet-async";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const {user} = useAuth();
  return (
    <div className="relative min-h-screen md:flex">
      <Helmet>
        <title>TaskUnity | Dashboard</title>
      </Helmet>
      <Sidebar></Sidebar>
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <p className="text-2xl font-medium my-2">
            Welcome to,{" "}
            <span className="text-rose-400">{user?.displayName}</span>
          </p>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;