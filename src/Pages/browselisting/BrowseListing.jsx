import React from "react";
import { useLoaderData } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { Link } from "react-router";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const BrowseListing = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(useLoaderData());

  useEffect(() => {
    fetch(`http://localhost:9000/posts?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [search]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <Helmet>
        <title>Browse Listings | LivMate</title>
      </Helmet>

      <h1
        data-aos="zoom-in"
        className="text-4xl font-bold text-center text-primary"
      >
        Find Your Perfect Roommate Match
      </h1>
      <p
        data-aos="zoom-in"
        className="text-center w-3/4 mx-auto text-secondary mt-6 mb-14"
      >
        Explore available listings tailored to your lifestyle, preferences, and
        budget. Filter by location, room type, and more to find the right fit
        for you.
      </p>
      {/* search */}
      <label
        data-aos="fade-up"
        className="input w-3/4 mx-auto flex items-center mb-6"
      >
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
        />
      </label>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 shadow-primary gap-10">
        <Fade cascade damping={0.2}>
          {posts.map((post, index) => (
            <div
              data-aos-duration={(index + 1) * 500}
              key={post._id}
              className="transform h-fit duration-500 hover:scale-105 hover:shadow-xl shadow-primary"
            >
              <div className="card bg-info  shadow-xl">
                <div className="card-body">
                  <h2 className="card-title font-bold">{post.title}</h2>
                  <p className="text-secondary">{post.description}</p>

                  <div className="flex items-center justify-between">
                    <p className="flex items-center">
                      <FaLocationDot />
                      {post.location}
                    </p>
                    <p
                      className={`flex text-white items-center justify-center`}
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
                  {post?.likes && (
                    <p className="flex gap-0.5 items-center">
                      <BiLike size={17} />
                      {post?.likes}
                    </p>
                  )}
                  <div className="card-actions justify-end">
                    <Link to={`/details/${post._id}`}>
                      <button className="btn text-neutral btn-primary">
                        See more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default BrowseListing;
