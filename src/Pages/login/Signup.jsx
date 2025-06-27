import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import { use } from "react";
import { AuthContext } from "../../Utility/AuthProvider";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";
import { updateProfile } from "firebase/auth";
import signupAnimation from "../../assets/signupAnimation.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { createUser, setUser, setLoading, googleSignIn } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    setLoading(true);

    createUser(email, password)
      .then((res) => {
        return updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          return auth.currentUser.reload().then(() => {
            setUser({ ...auth.currentUser });
            setLoading(false);
            Swal.fire({
              title: "User Created Successfully",
              text: "You are logged in now",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate(location?.state || "/");
          });
        });
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === "auth/email-already-in-use") {
          toast.error(
            'Email already in use!!! \n"please provide another email or login"'
          );
        } else {
          toast.error(
            `Missing password requirements!!!\n"` +
              err.message.split("[")[1].split("]")[0] +
              `"`
          );
        }
      });
  };

  const handleGoogleSubmit = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          title: "User Created Successfully",
          text: "You are loged in now",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state || "/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      data-aos="zoom-in-up"
      className="py-28 min-h-[calc(100vh-250px)] flex items-center justify-center flex-col md:flex-row"
    >
      <Helmet>
        <title>Signup | LivMate</title>
      </Helmet>

      <div data-aos="fade-left" className="max-w-md xl:max-w-xl">
        <Lottie animationData={signupAnimation} loop={true} />
      </div>
      <form
        data-aos="fade-right"
        onSubmit={handleSubmit}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-primary shadow-2xl p-8 sm:transform sm:scale-105 rounded-3xl"
      >
        <h1 className="text-5xl text-primary">Register Now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-primary">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label text-primary">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label mt-3 text-primary">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label mt-3 text-primary">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input z-0"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="z-10 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </button>
            </div>

            {/* register btn */}
            <button
              type="submit"
              className="mt-3 justify-center relative inline-flex items-center px-8 py-1 overflow-hidden text-base font-medium text-primary border-3 border-primary rounded-sm hover:text-neutral group hover:bg-primary bg-neutral group cursor-pointer"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-14 ease">
                <IoLogInSharp size={25} />
              </span>
              <span className="relative">Register</span>
            </button>
            {/* login with google */}
            <button
              onClick={handleGoogleSubmit}
              className="btn hover:bg-primary hover:text-neutral bg-neutral text-primary border-primary"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Register with Google
            </button>

            <p className="pt-4 font-semibold text-center text-[14px]">
              Already have an account?{" "}
              <Link to={"/login"} className={"link link-hover text-sky-500"}>
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Signup;
