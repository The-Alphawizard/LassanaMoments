// UserLoginPage5

import React, { useState } from "react";
import { Lock, MoveLeft, BadgeCheck } from "lucide-react";
import Image from "./../../assets/User LogIn Images/5.jpg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

// Dots Component (extracted as a function)
const DotsContainer = () => (
  <div className="flex flex-row gap-3 mt-5 lg:mt-30 absolute lg:bottom-10 bottom-2 md:left-1/4 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#212121FF] w-2 h-2 shadow-lg"></div>
  </div>
);

const UserLoginPage5 = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/PhotographerLoginPage1");
  };

  return (
    <div
      className="flex items-center justify-center h-screen p-4 sm:p-8 relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))",
      }}
    >
      {/* Small Screen Background */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="flex flex-col justify-center p-6 sm:p-8 w-full h-auto">
          <BadgeCheck className="w-12 p-2 mb-2 h-auto border border-gray-400 rounded-xl" />

          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            All done !
          </h1>
          <p className="text-gray-500 text-sm mb-6">Let's go..</p>
          <Button
          onClick={handleNextPage}
            type="submit"
            name="Reset password"
            bgColor="#0057ff"
            borderColor="#0057ff"
            iconBgColor="white"
            borderRadius="10px"
            fontWeight="400"
            fontSize="20px"
            paddingTop="10px"
            paddingBottom="10px"
          />
        </div>

        {/* Dots Container */}
        <DotsContainer />

        {/* Image Section for Large Screens */}
        <div className="relative hidden sm:flex items-center justify-center p-5 h-full">
          {/* Image */}
          <img
            src={Image}
            alt="Welcome Back"
            className="w-full h-[600px] object-cover rounded-3xl"
          />

          <div className="flex items-center justify-center absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute rounded-3xl opacity-90 w-82 h-25 shadow-lg"
              style={{
                background:
                  "radial-gradient(circle, var(--color-periwinkleBlue) , var(--color-aliceBlue))",
              }}
            ></div>

            <div className="relative text-left">
              <h1 className="text-[21px] font-semibold mb-2">Welcome Back!</h1>
              <p className="text-gray-500 text-[7px]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage5;
