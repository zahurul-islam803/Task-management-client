import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await login(email, password);
        toast.success("User Login");
        navigate("/dashboard");
      } catch (error) {
        toast.error(error.message);
      } 
  };
  return (
    <div>
      <div className="hero-content flex-col justify-center items-center mx-auto md:mt-10 lg:mt-36">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card px-[20px] pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#faa36d]">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </div>
          </form>
          <p className="text-center">
            New Here?
            <Link to={`/registration`} className="text-white">
              Please Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
