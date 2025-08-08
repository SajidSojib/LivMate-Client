import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import { MdGroupAdd } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { RiMenuSearchFill } from "react-icons/ri";
import { use } from "react";
import { AuthContext } from "../../Utility/AuthProvider";

const Hero = () => {
  const { user } = use(AuthContext);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      > 
        <SwiperSlide className="rounded-xl">
          <div
            className=" rounded-xl text-center bg-cover"
            style={{
              backgroundImage: `url(https://i.ibb.co/Q3jTV9Cd/dormimg3.jpg)`,
            }}
          >
            <div className="py-64 rounded-xl space-y-3 bg-gradient-to-t from-[#e2141410] via-[#0f0f0fa1] to-[#0f0f0fde]">
              <h1
                data-aos={"zoom-in"}
                className="text-4xl opacity-100 text-white font-bold"
              >
                Find the Right Roommate
              </h1>
              <p
                data-aos={"fade-up"}
                className="text-white opacity-80 w-3/4 mx-auto"
              >
                Easily create a detailed listing with your location, rent,
                lifestyle preferences, and more. Connect with people who truly
                match your needs and living style.
              </p>
              <Link
                data-aos={"fade-up"}
                to={"/addroommate"}
                className="relative mt-3 inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-neutral border-2 border-primary group-hover:bg-primary"></span>
                <span className="relative flex items-center gap-1 text-primary group-hover:text-neutral">
                  <MdGroupAdd size={22} /> Find Roommate
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <div
            className="rounded-xl text-center bg-cover"
            style={{
              backgroundImage: `url(https://i.ibb.co/LzQ5VrTY/dormimg2.jpg)`,
            }}
          >
            <div className="py-64 rounded-xl space-y-3 bg-gradient-to-t from-[#e2141410] via-[#0f0f0fa1] to-[#0f0f0fde]">
              <h1
                data-aos={"zoom-in"}
                className="text-4xl text-white font-bold"
              >
                Browse Roommate Listings
              </h1>
              <p
                data-aos={"fade-up"}
                className="text-white opacity-80 w-3/4 mx-auto"
              >
                Scroll through real roommate listings added by others. Use
                filters to discover compatible roommates based on city, budget,
                room type, and lifestyle choices.
              </p>
              <Link
                to={"/browseListings"}
                className="relative mt-3 inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-neutral border-2 border-primary group-hover:bg-primary"></span>
                <span className="relative flex items-center gap-1 text-primary group-hover:text-neutral">
                  <RiMenuSearchFill size={22} /> Browse Listings
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-xl">
          <div
            className="space-y-3 rounded-xl text-center bg-cover"
            style={{
              backgroundImage: `url(https://i.ibb.co/9HPbT2tW/dormimg1.jpg)`,
            }}
          >
            <div className="py-64 rounded-xl space-y-3 bg-gradient-to-t from-[#e2141410] via-[#0f0f0fa1] to-[#0f0f0fde]">
              <h1
                data-aos={"zoom-in"}
                className="text-4xl text-white font-bold"
              >
                Manage Your Listings
              </h1>
              <p
                data-aos={"fade-up"}
                className="text-white opacity-80 w-3/4 mx-auto"
              >
                Access your own dashboard to view, edit, or remove your listings
                anytime. Keep control over your roommate search and stay
                organized in one place.
              </p>
              <Link
                data-aos={"fade-up"}
                to={`/mylistings/${user?.email}`}
                className="relative mt-3 inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-neutral border-2 border-primary group-hover:bg-primary"></span>
                <span className="relative flex items-center gap-1 text-primary group-hover:text-neutral">
                  <FaListCheck size={22} /> View My Listings
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
