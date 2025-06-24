import React from "react";
import { AuthContext } from "../../Utility/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import UpdateListing from "./UpdateListing";
import { useLoaderData } from "react-router";
const MyListings = () => {
  const initialPosts = useLoaderData();
//   const { user } = use(AuthContext);
  const [posts, setPosts] = useState(initialPosts);
  const [updatePost, setUpdatePost] = useState(null);

  const handleUpdateClick = (post) => {
    setUpdatePost(post);
    document.getElementById("my_modal_3").showModal();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/posts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = posts.filter((p) => p._id !== id);
              setPosts(remaining);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="mt-20 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h1 className="text-4xl text-center font-bold text-primary">
        My Roommate Listings
      </h1>
      <p className="mt-6 mb-14 w-3/4 mx-auto text-center text-secondary">
        Manage all your roommate posts in one place. Update or delete your
        listings easily and keep your profile up to date.
      </p>

      {/* table */}
      <div className="mb-20 overflow-x-auto bg-info">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-primary bg-info">
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Room Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {posts.map((post) => (
              <tr key={post._id} className="">
                <td>{post.title}</td>
                <td>{post.location}</td>
                <td>{post.rent}</td>
                <td>{post.roomType}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleUpdateClick(post)}
                    className="relative inline-block group"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-primary transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-neutral">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-neutral"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
                      <span className="relative flex items-center gap-1">
                        <GrUpdate size={16} />
                        Update
                      </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </button>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="relative inline-block group"
                  >
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-neutral transition-colors duration-300 ease-out border-2 border-neutral rounded-lg group-hover:text-primary">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-primary "></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-neutral group-hover:-rotate-180 ease "></span>
                      <span className="relative flex items-center gap-1">
                        <RiDeleteBin6Fill size={20} />
                        Delete
                      </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 border-primary ease-linear bg-neutral rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box p-0 max-w-5xl">
            <UpdateListing
              post={updatePost}
              posts={posts}
              setPosts={setPosts}
            ></UpdateListing>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyListings;
