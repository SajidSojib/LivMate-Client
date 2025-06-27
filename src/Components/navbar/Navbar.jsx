import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { RiMenuSearchFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../Utility/AuthProvider";
import { use } from "react";
import { useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You really want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
        Swal.fire({
          title: "Logged out!",
          text: "Your are logged out successfully.",
          icon: "success",
        });
      }
    });
    
  };
  return (
    <div className="text-primary px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          to={"/"}
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <svg
            className="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-primary">
            LivMate
          </span>
        </Link>
        <ul data-aos="zoom-in" className="items-center hidden space-x-6 lg:flex">
          <li>
            <NavLink
              to={`/`}
              aria-label="Our product"
              title="Our product"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary font-medium tracking-wide transition-colors duration-200 text-neutral hover:border-b-3 flex items-center"
                  : "font-medium tracking-wide transition-colors duration-200 hover:border-b-3 flex items-center gap-1 border-primary"
              }
            >
              <IoHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/addroommate`}
              aria-label="Our product"
              title="Our product"
              className={({ isActive }) =>
                isActive
                  ? "btn flex items-center btn-primary font-medium tracking-wide transition-colors duration-200 hover:border-b-3 text-neutral"
                  : "font-medium flex items-center gap-1 tracking-wide transition-colors duration-200 hover:border-b-3 border-primary"
              }
            >
              <MdGroupAdd size={22} />
              Add Roommate
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/browseListings`}
              aria-label="Our product"
              title="Our product"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary flex items-center font-medium tracking-wide transition-colors duration-200 text-neutral hover:border-b-3"
                  : "flex items-center gap-1 font-medium tracking-wide transition-colors duration-200 hover:border-b-3 border-primary"
              }
            >
              <RiMenuSearchFill size={22} />
              Browse Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/mylistings/${user?.email}`}
              aria-label="Product pricing"
              title="Product pricing"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary flex items-center font-medium tracking-wide transition-colors duration-200 hover:border-b-3 text-neutral"
                  : "font-medium tracking-wide flex items-center gap-1 transition-colors duration-200 hover:border-b-3 border-primary"
              }
            >
              <FaListCheck size={22} />
              My Listings
            </NavLink>
          </li>
        </ul>
        <ul className="items-center hidden space-x-4 lg:flex">
          {user?.photoURL ? (
            <>
              <img
                className=" my-tooltip w-12 h-12 p-1 rounded-full ring-2 ring-primary cursor-pointer"
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt=""
              />

              <li>
                <button
                  onClick={handleLogout}
                  to={`/signup`}
                  className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-neutral">
                    Log Out
                  </span>
                  <span className="absolute inset-0 border-3 border-primary rounded-full"></span>
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={`/signup`}
                  className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-neutral">
                    Sign Up
                  </span>
                  <span className="absolute inset-0 border-3 border-primary rounded-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/login`}
                  className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-neutral">
                    Login
                  </span>
                  <span className="absolute inset-0 border-3 border-primary rounded-full"></span>
                </NavLink>
              </li>
            </>
          )}

          {/* theme btn */}
          <li>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={toggleTheme}
                checked={theme === "dark" ? true : false}
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className={`swap-off h-10 w-10 fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className={`swap-on h-10 w-10 fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </li>
        </ul>

        <div className="lg:hidden">
          <div className="flex gap-0.5 items-center">
            <div>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onChange={toggleTheme}
                  checked={theme === "dark" ? true : false}
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                />

                {/* sun icon */}
                <svg
                  className={`swap-off h-10 w-10 fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className={`swap-on h-10 w-10 fill-current`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            {user?.photoURL && (
              <img
                className="my-tooltip inline w-8 h-8 p-0.5 rounded-full ring-2 ring-primary cursor-pointer"
                src={user?.photoURL}
                alt=""
              />
            )}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-primary" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-0 z-100 left-0 w-full">
              <div className="p-5 bg-primary text-neutral rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-neutral">
                        LivMate
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded text-neutral focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IoCloseSharp size={25} ></IoCloseSharp>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to={`/`}
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-neutral font-medium tracking-wide transition-colors duration-200 text-primary hover:border-b-3 flex items-center"
                            : "font-medium btn btn-outline border-0 btn-neutral tracking-wide transition-colors duration-200 hover:border-3 flex items-center gap-1 border-neutral"
                        }
                      >
                        <IoHome />
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/addroommate`}
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          isActive
                            ? "btn flex items-center btn-neutral font-medium tracking-wide transition-colors duration-200 hover:border-b-3 text-primary"
                            : "font-medium btn btn-outline border-0 btn-neutral tracking-wide transition-colors duration-200 hover:border-3 flex items-center gap-1 border-neutral"
                        }
                      >
                        <MdGroupAdd size={22} />
                        Add Roommate
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/browseListings`}
                        aria-label="Our product"
                        title="Our product"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-neutral flex items-center font-medium tracking-wide transition-colors duration-200 text-primary hover:border-b-3"
                            : "font-medium btn btn-outline border-0 btn-neutral tracking-wide transition-colors duration-200 hover:border-3 flex items-center gap-1 border-neutral"
                        }
                      >
                        <RiMenuSearchFill size={22} />
                        Browse Listings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/mylistings/${user?.email}`}
                        aria-label="Product pricing"
                        title="Product pricing"
                        className={({ isActive }) =>
                          isActive
                            ? "btn btn-neutral flex items-center font-medium tracking-wide transition-colors duration-200 hover:border-b-3 text-primary"
                            : "font-medium btn btn-outline border-0 btn-neutral tracking-wide transition-colors duration-200 hover:border-3 flex items-center gap-1 border-neutral"
                        }
                      >
                        <FaListCheck size={22} />
                        My Listings
                      </NavLink>
                    </li>
                    <li>
                      <div className="flex justify-around items-center">
                        {user?.photoURL ? (
                          <NavLink
                            onClick={handleLogout}
                            to={`/login`}
                            className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                          >
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-neutral opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-neutral opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-neutral transition-colors duration-200 ease-in-out group-hover:text-primary">
                              Sign Out
                            </span>
                            <span className="absolute inset-0 border-3 border-neutral rounded-full"></span>
                          </NavLink>
                        ) : (
                          <>
                            <NavLink
                              to={`/signup`}
                              className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                            >
                              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-neutral opacity-[3%]"></span>
                              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-neutral opacity-100 group-hover:-translate-x-8"></span>
                              <span className="relative w-full text-left text-neutral transition-colors duration-200 ease-in-out group-hover:text-primary">
                                Sign Up
                              </span>
                              <span className="absolute inset-0 border-3 border-neutral rounded-full"></span>
                            </NavLink>

                            <NavLink
                              to={`/login`}
                              className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                            >
                              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-neutral opacity-[3%]"></span>
                              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-neutral opacity-100 group-hover:-translate-x-8"></span>
                              <span className="relative w-full text-left text-neutral transition-colors duration-200 ease-in-out group-hover:text-primary">
                                Login
                              </span>
                              <span className="absolute inset-0 border-3 border-neutral rounded-full"></span>
                            </NavLink>
                          </>
                        )}
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      <Tooltip
        anchorSelect=".my-tooltip"
        content={user?.displayName}
        place="bottom-end"
      />
    </div>
  );
};

export default Navbar;
