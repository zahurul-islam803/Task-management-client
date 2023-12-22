import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { imageUpload } from "../Api/axios";
import { saveUser } from "../Api/auth";
const Registration = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, updateUserProfile } =
    useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    try {
      const imageData = await imageUpload(image);
      const userData = await createUser(email, password);
      await updateUserProfile(name, imageData?.data?.display_url);
      const dbResponse = await saveUser(userData?.user);
      console.log(dbResponse);
      form.reset();
      navigate("/");
      toast.success("signUp successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  // google sign in
  const handleGoogleLogin = async () => {
    try {
      const userData = await signInWithGoogle();
      const dbResponse = await saveUser(userData?.user);
      console.log(dbResponse);
      navigate("/");
      toast.success("signUp successful");
    } catch (err) {
      toast.error(err?.message);
    }
  };


  return (

      <div>
        <div className="hero-content flex-col justify-center items-center mx-auto md:mt-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card px-[25px] pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  placeholder="Your Photo"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
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
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-warning">
                  Register
                </button>
              </div>
              <div className="divider ">Or</div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-warning  w-full flex justify-between items-center cursor-pointer "
              >
                Google
                <FcGoogle className="w-8 h-8" />
              </button>
            </form>
            <p>
              Already have an account?
              <Link to={`/login`} className="text-white">
                Please login
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default Registration;
