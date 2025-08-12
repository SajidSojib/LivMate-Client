import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router";
const Feature = ({ posts }) => {
  console.log(posts);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-4xl font-bold text-center text-primary">
        Featured Roommates Post
      </h1>
      <p className="text-center w-3/4 mx-auto text-secondary mt-6 mb-14">
        Handpicked rooms and spaces tailored to popular preferences — explore
        top-rated options loved by our community.
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 shadow-primary gap-10">
        <Fade cascade damping={0.2}>
          {posts?.map((post, index) => (
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
      <div data-aos="fade-up" className="text-center mt-10">
        <Link to={"/browseListings"}>
          <button className="btn btn-wide btn-primary text-neutral">
            See More Posts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
