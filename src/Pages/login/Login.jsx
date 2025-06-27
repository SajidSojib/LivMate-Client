import React from 'react';
import { useState } from 'react';
import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Utility/AuthProvider';
import {IoLogInSharp} from 'react-icons/io5'
import Lottie from "lottie-react";
import loginAnimation from '../../assets/loginAnimation.json';
const Login = () => {
    const { signInUser, googleSignIn } = use(AuthContext);
      const [showPassword, setShowPassword] = useState(false);
      const [remember, setRemember] = useState('');
      const navigate = useNavigate();
      const location = useLocation();
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
    
        signInUser(email, password)
          .then(() => {
            Swal.fire({
              title: "User Created Successfully",
              text: "You are loged in now",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate(location?.state || '/');
          })
          .catch((err) => {
            setRemember(err);
            toast.error(err.message.split('/')[1].split(')')[0]+` : "please provide valid email and password"`);
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
            navigate(location?.state ? location?.state : '/');
          })
          .catch((err) => toast.error(err.message));
      };
    return (
      <div
        className="py-28 min-h-[calc(100vh-250px)] flex flex-col xl:flex-row items-center justify-center"
      >
        <div data-aos="fade-left" className='max-w-xl'>
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
        <form
          data-aos="fade-right"
          onSubmit={handleSubmit}
          className="card border bg-base-100 w-full max-w-sm shrink-0 shadow-primary shadow-2xl p-8 sm:transform sm:scale-105 rounded-3xl"
        >
          <h1 className="text-5xl text-primary">Login Now!</h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label text-primary">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label text-primary mt-3">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input z-0"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="z-10 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <FaEyeSlash size={22} />
                  ) : (
                    <FaEye size={22} />
                  )}
                </button>
              </div>
              <div>
                {remember && (
                  <p className="mt-2 text-yellow-600">
                    Can't remember password? Click here
                  </p>
                )}
                <p
                  className="link link-hover font-semibold"
                >
                  Forgot password?
                </p>
              </div>

              {/* login btn */}
              <button
                type="submit"
                className="mt-3 justify-center relative inline-flex items-center px-8 py-1 overflow-hidden text-base font-medium text-primary border-1 border-primary rounded-sm bg-neutral hover:text-neutral group hover:bg-primary group cursor-pointer"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:-translate-x-17 ease">
                  <IoLogInSharp size={25} />
                </span>
                <span className="relative">Login</span>
              </button>
              {/* login with google */}
              <button
                type="button"
                onClick={handleGoogleSubmit}
                className="btn hover:bg-primary text-primary hover:text-neutral  bg-neutral border-primary"
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
                Login with Google
              </button>

              <p className="pt-4 font-semibold text-center text-[14px]">
                Don't have an account?{" "}
                <Link
                  state={location?.state}
                  to={"/signup"}
                  className={"link link-hover text-sky-500"}
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </div>
        </form>
      </div>
    );
};

export default Login;