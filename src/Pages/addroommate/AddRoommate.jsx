import React from "react";
import { use } from "react";
import { AuthContext } from "../../Utility/AuthProvider";

const AddRoommate = () => {
  const {user} = use(AuthContext);
  console.log(user);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <form>
        <div className="mt-14 card-body bg-base-100 w-full max-w-4xl mx-auto mb-24 shrink-0 shadow-primary shadow-2xl p-12 sm:transform sm:scale-105 rounded-3xl">
          <h1 className="text-4xl font-bold text-center text-primary">
            Post To Find Your Roommate
          </h1>
          <p className="text-lg w-3/4 mx-auto mt-3 mb-14 text-center text-secondary">
            Easily share your preferences, budget, and lifestyle details to find
            the ideal roommate who truly fits your living style.
          </p>
          <fieldset className="fieldset space-y-3 grid gap-4 mb-4 md:grid-cols-2">
            <div className="flex flex-col gap-0.5  md:col-span-2">
              <label className="label text-primary">Title</label>
              <input
                name="title"
                type="text"
                className="input input-primary w-full"
                placeholder="Add a title"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-primary">Location</label>
              <input
                name="title"
                type="text"
                className="input w-full input-primary"
                placeholder="Location"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-primary">Rent</label>
              <input
                name="title"
                type="text"
                className="input w-full input-primary"
                placeholder="Rent per month($)"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <select
                defaultValue="Room Type"
                className="select w-full select-primary"
              >
                <option disabled={true}>Room Type</option>
                <option>Single</option>
                <option>Shared</option>
                <option>Dorm</option>
                <option>Apartment</option>
              </select>
            </div>

            <div className="flex flex-col gap-0.5">
              <select
                defaultValue="Availability"
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
                    className="checkbox text-xl text-neutral checkbox-primary"
                    // onChange={handleCheckboxChange}
                  />
                  <span className="text-base text-primary">No Pets</span>
                </label>
                <label className="label w-fit">
                  <input
                    type="checkbox"
                    name="lifestyle"
                    value="No Smoking"
                    className="checkbox text-xl text-neutral checkbox-primary"
                    // onChange={handleCheckboxChange}
                  />
                  <span className="text-base text-primary">No Smoking</span>
                </label>
                <label className="label w-fit">
                  <input
                    type="checkbox"
                    name="lifestyle"
                    value="Night Owls"
                    className="checkbox text-xl text-neutral checkbox-primary"
                    // onChange={handleCheckboxChange}
                  />
                  <span className="text-base text-primary">Night Owls</span>
                </label>
                <label className="label w-fit">
                  <input
                    type="checkbox"
                    name="lifestyle"
                    value="No Frequent Guests"
                    className="checkbox text-xl text-neutral checkbox-primary"
                    // onChange={handleCheckboxChange}
                  />
                  <span className="text-base text-primary">
                    No Frequent Guests
                  </span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-primary">Contact Info</label>
              <input
                name="email"
                type="text"
                className="input w-full input-primary"
                placeholder="Phone/Email"
              />
            </div>

            <div className="flex flex-col md:col-span-2 gap-0.5">
              <label className="label text-primary">Description</label>
              <textarea
                placeholder="Add a description"
                class="textarea textarea-primary w-full"
              ></textarea>
            </div>

            <div className="flex flex-col gap-0.5">
              <label className="label text-primary">Your Name</label>
              <input
                name="name"
                type="text"
                className="input w-full input-primary"
                value={user?.displayName}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="label text-primary">Your Email</label>
              <input
                name="email"
                type="email"
                className="input w-full input-primary"
                value={user?.email}
              />
            </div>

            <button
              class="md:col-span-2 mt-6 relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter border border-primary text-primary bg-neutral rounded-lg group"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-full group-hover:h-60"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
              <span class="relative group-hover:text-neutral text-base">Post Now</span>
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AddRoommate;
