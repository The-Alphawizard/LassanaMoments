// UserSignUp4

import React, { useState } from "react";
import Image from "./../../assets/User SignUp Images/2.jpg";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

// import { useUser } from "../../context/UserContext";

const UserSignUp3 = () => {
  const navigate = useNavigate();

  const handleNextRoutePages = () => {
    navigate("/UserSignUp3");
  };
  const handlePrevRoutePages = () => {
    navigate("/");
  };
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 p-4 sm:p-8 relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))",
      }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center w-full">
          <div className="p-3 rounded-3xl">
            <div className="flex flex-col items-center mb-8">
              <div className="w-80 h-80 rounded-3xl  flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={Image}
                  alt="Profile"
                  className="w-80 h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Step Indicator */}
          <div className="flex gap-2 mb-3 justify-center items-center">
            <div className="rounded-full bg-[var(--color-primaryText)] w-2 h-2 shadow-lg"></div>

            <div className="rounded-full bg-[var(--color-primaryText)] w-2 h-2 shadow-lg"></div>
            <div className="rounded-full bg-[#FFA200FF] w-2 h-2 shadow-lg"></div>
          </div>

          {/* Title and Description */}
          <h2
            className="text-lg font-semibold  mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Let's get start
          </h2>
          <p className="text-[11px] text-gray-500 text-center mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div className="flex justify-center gap-3 w-full">
            <Button
              onClick={handleNextRoutePages}
              name="Previous"
              bgColor=""
              fontColor="#115c86"
              borderColor="#ffffff"
              iconBgColor="white"
              borderRadius="50px"
              fontWeight="400"
              fontSize="20px"
              paddingTop="10px"
              paddingBottom="10px"
            />
            <Button
              onClick={handlePrevRoutePages}
              name="Let's Go"
              bgColor="#0057ff"
              borderColor="#0057ff"
              iconBgColor="white"
              borderRadius="12px"
              fontWeight="400"
              fontSize="20px"
              paddingTop="10px"
              paddingBottom="10px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp3;
