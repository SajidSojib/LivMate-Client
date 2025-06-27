import React from "react";
import { use } from "react";
import { AuthContext } from "../../Utility/AuthProvider";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateListing = ({post, posts, setPosts}) => {
  const {user} = use(AuthContext)
  const [checkboxChange, setCheckboxChange] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckboxChange([...checkboxChange, value]);
    } else {
      setCheckboxChange(checkboxChange.filter((item) => item !== value));
    }
  }

  const handleSubmit=e=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const newPost=Object.fromEntries(formData.entries());
    newPost.lifestyle=checkboxChange;

    fetch(`http://localhost:9000/posts/${post._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        newPost._id=post._id
        if (data.modifiedCount) {
            setPosts(posts.map((p) => p._id === post._id ? newPost : p))
            Swal.fire({
              title: "Listing Updated Successfully",
              text: "Your listing has been updated",
              icon: "success",
              timer: 1500,
              confirmButtonText: "Ok",
            })        }
        e.target.reset();
      });
    const modal = document.getElementById("my_modal_3");
    if(modal) {
      modal.close()
    }
  }
  return (
    <div className="max-w-5xl bg-info">
      <div className="max-w-4xl p-6 mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center">
          Update Listing
        </h1>
        <div className="modal-action max-w-4xl">
          <form className="w-full" onSubmit={handleSubmit}>
            <button type="button" onClick={() => document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <fieldset className="fieldset space-y-3 grid gap-4 mb-4 md:grid-cols-2">
              <div className="flex flex-col gap-0.5  md:col-span-2">
                <label className="label text-primary">Title</label>
                <input
                  name="title"
                  defaultValue={post?.title}
                  type="text"
                  className="input input-primary w-full"
                  placeholder="Add a title"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="label text-primary">Location</label>
                <input
                  name="location"
                  defaultValue={post?.location}
                  type="text"
                  className="input w-full input-primary"
                  placeholder="Location"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="label text-primary">Rent</label>
                <input
                  defaultValue={post?.rent}
                  name="rent"
                  type="text"
                  className="input w-full input-primary"
                  placeholder="Rent per month($)"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <select
                  name="roomType"
                  defaultValue={post?.roomType || ''}
                  className="select w-full select-primary"
                >
                  <option value={''} disabled={true}>Room Type</option>
                  <option value={'Single'}>Single</option>
                  <option value={'Shared'}>Shared</option>
                  <option value={'Dorm'}>Dorm</option>
                  <option value={'Apartment'}>Apartment</option>
                </select>
              </div>

              <div className="flex flex-col gap-0.5">
                <select
                  name="availability"
                  defaultValue='Availability'
                  className="select w-full select-primary"
                >
                  <option disabled={true}>Availability</option>
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="label text-primary">
                  Life Style Preferences
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="label w-fit">
                    <input
                      type="checkbox"
                      name="lifestyle"
                      value="No Pets"
                      checked={checkboxChange.includes("No Pets")}
                      className="checkbox text-xl text-neutral checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="sm:text-base text-primary">No Pets</span>
                  </label>
                  <label className="label w-fit">
                    <input
                      type="checkbox"
                      checked={checkboxChange.includes("No Smoking")}
                      name="lifestyle"
                      value="No Smoking"
                      className="checkbox text-xl text-neutral checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="sm:text-base text-primary">
                      No Smoking
                    </span>
                  </label>
                  <label className="label w-fit">
                    <input
                      type="checkbox"
                      checked={checkboxChange.includes("Night Owls")}
                      name="lifestyle"
                      value="Night Owls"
                      className="checkbox text-xl text-neutral checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="sm:text-base text-primary">
                      Night Owls
                    </span>
                  </label>
                  <label className="label w-fit">
                    <input
                      type="checkbox"
                      checked={checkboxChange.includes("No Frequent Guests")}
                      name="lifestyle"
                      value="No Frequent Guests"
                      className="checkbox text-xl text-neutral checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="sm:text-base text-primary">
                      No Frequent Guests
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="label text-primary">Contact Info</label>
                <input
                  name="contact"
                  defaultValue={post?.contact}
                  type="text"
                  className="input w-full input-primary"
                  placeholder="Phone/Email"
                />
              </div>

              <div className="flex flex-col md:col-span-2 gap-0.5">
                <label className="label text-primary">Description</label>
                <textarea
                  name="description"
                  defaultValue={post?.description}
                  type="text"
                  placeholder="Add a description"
                  className="textarea textarea-primary w-full"
                ></textarea>
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="label text-primary">Your Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full input-primary"
                  value={user?.displayName}
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="label text-primary">Your Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full input-primary"
                  value={user?.email}
                  readOnly
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 mt-6 cursor-pointer relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter border border-primary text-primary bg-neutral rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-full group-hover:h-60"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
                <span className="relative group-hover:text-neutral text-base">
                  Update Now
                </span>
              </button>
            </fieldset>
            {/* if there is a button in form, it will close the modal */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateListing;
