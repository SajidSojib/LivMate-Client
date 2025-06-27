import React from "react";
import { useLoaderData } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { toast } from "react-toastify";
import { use } from "react";
import { AuthContext } from "../../Utility/AuthProvider";
import postAnimation from "../../assets/postAnimation.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";

const Details = () => {
  const { user } = use(AuthContext);
  const [post, setPost] = useState(useLoaderData());
  const [toggle, setToggle] = useState(false);

  const handleLike = () => {
    if (user.email === post.email) {
      toast.error("You can't like your own post");
    } else {
      fetch(`https://livmate-server.vercel.app/posts/${post._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ likes: post?.likes }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            setPost({ ...post, likes: (post?.likes || 0) + 1 });
            toggle || toast.success("Liked Successfully!");
          }
        });
      setToggle(!toggle);
    }
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col lg:flex-row items-center justify-center gap-8">
      <Helmet>
        <title>Details | LivMate</title>
      </Helmet>

      <div className="xl:w-md md:w-sm">
        <Lottie animationData={postAnimation} loop={true} />
      </div>

      <div
        data-aos="fade-right"
        className="flex flex-col max-w-lg shadow-primary p-6 space-y-6 min-w-xs overflow-hidden rounded-lg shadow-lg bg-info text-primary"
      >
        {/* header */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="ring-2 ring-primary relative w-10 h-10 overflow-hidden bg-primary rounded-full ">
              <svg
                className="absolute w-12 h-12 text-neutral -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold">{post.name}</p>
              <span className="text-xs text-secondary">4 hours ago</span>
            </div>
          </div>
          {post.likes && (
            <p className="p-1 px-1.5 text-sm bg-primary text-neutral rounded-2xl">
              {post?.likes} people intersted
            </p>
          )}
        </div>

        {/* details */}
        <div>
          <h2 className="mb-1 text-xl font-semibold">{post.title}</h2>
          <p className="text-sm text-secondary">{post.description}</p>
          <div className="flex flex-wrap mt-3 items-center justify-between">
            {post?.lifestyle.map((l, i) => (
              <p key={i} className={`text-neutral`}>
                <span className={`bg-primary p-1 px-1.5 text-sm rounded-xl`}>
                  {l}
                </span>
              </p>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="flex items-center">
              <FaLocationDot />
              {post.location}
            </p>
            <p
              className={`flex text-sm text-white items-center justify-center`}
            >
              <span
                className={`${
                  post.availability === "Available"
                    ? "bg-green-700 p-1 px-1.5 rounded-xl"
                    : "bg-red-700 p-1 px-1.5 rounded-xl"
                }`}
              >
                {post.availability}
              </span>
            </p>
          </div>
          <p className="flex items-center gap-0.5">
            <FaHome size={16} />
            {post.roomType}
          </p>
          <p className="flex items-center">
            <MdMonetizationOn size={17} />
            {post.rent}
          </p>
        </div>

        {/* btns */}
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
              </svg>
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex space-x-2 text-sm">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Number of comments"
                className="w-4 h-4 fill-current"
              >
                <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
              </svg>
              <span>30</span>
            </button>
            <div className="flex items-center ">
              <button
                type="button"
                className="flex cursor-pointer items-center p-1 space-x-1.5"
              >
                {toggle ? (
                  <BiSolidLike size={18} />
                ) : (
                  <BiLike onClick={handleLike} size={18} />
                )}
              </button>
              <span>{post?.likes}</span>
            </div>
          </div>
        </div>
        {toggle && (
          <div
            onClick={() => toast.success(`Contacting ${post.name} for booking`)}
            className="btn btn-primary text-neutral"
          >
            <p className="flex gap-2 items-center">
              <span className="flex gap-0.5 items-center">
                <BiSolidContact size={17} />
                Contact Now:
              </span>
              {post.contact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
