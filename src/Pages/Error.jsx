import React from "react";
import { Link } from "react-router";
import { useNavigation } from "react-router";
import Lottie from "lottie-react";
import errorAni from "../assets/errorAni.json";
import { Helmet } from "react-helmet";
const Error = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Helmet>
        <title>Error | LivMate</title>
      </Helmet>
      {navigation.state === "loading" && (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
      <div className="max-w-lg rounded-2xl">
        <Lottie className="rounded-2xl" animationData={errorAni} loop={true} />
      </div>
      <p className="text-lg mt-5 font-semibold text-center text-secondary">
        Oops! The page you're looking for doesn't exist or has been moved.{" "}
        <br />
        Please click the button below to go back to the Home
      </p>
      <Link className="mt-6" to={"/"}>
        <button className="cursor-pointer relative inline-flex items-center justify-center p-2 px-6 py-2 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-neutral duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
            Go to Home
          </span>
          <span className="relative invisible">View Details</span>
        </button>
      </Link>
    </div>
  );
};

export default Error;
