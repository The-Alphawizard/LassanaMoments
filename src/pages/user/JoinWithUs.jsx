import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../images/others/joinwithus.jpg";
import Button from "../../components/Button";

//        /PhotographerLogin1 --> for if user choose "photographer" options
//        /UserLoginPage1 --> for if user choose "finder " options

// and need correct routes

//testing file error case

const JoinWithUs = () => {
  const navigate = useNavigate();

  const handleRoutePages = () => {
    if (selectedOption === "photographer") {
      navigate("/PhotographerLogin1");
    } else {
      navigate("/UserSignUp1");
    }
  };
  const [selectedOption, setSelectedOption] = useState("photographer");

  return (
    <div
      className="flex items-center justify-center h-screen p-4 sm:p-8 relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))",
      }}
    >
      {/* Background Image for Small Screens */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="bg-white bg-opacity-90 md:bg-opacity-100 rounded-4xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl p-8 md:p-12 relative">
        {/* Left Section */}
        <div className="p-5 w-full md:w-1/2 space-y-6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#115c86]">
            Join with us
          </h1>
          <p className="text-gray-600">Create your account now</p>

          {/* Options */}
          <div className="space-y-4">
            <label
              style={{
                background:
                  "linear-gradient(to left, var(--color-aliceBlue), var(--color-periwinkleBlue))",
              }}
              className={`flex w-full items-center space-x-3  px-4 py-3 rounded-3xl cursor-pointer ${
                selectedOption === "photographer"
                  ? "bg-opacity-100"
                  : "bg-opacity-50"
              }`}
            >
              <input
                type="radio"
                name="accountType"
                className="hidden"
                checked={selectedOption === "photographer"}
                onChange={() => setSelectedOption("photographer")}
              />
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  selectedOption === "photographer"
                    ? "border-[#FFFFFFFF] bg-[#0057ff]"
                    : "border-[#FFFFFFFF]"
                }`}
              />
              <span className="text-gray-700 font-medium">
                Are you a photographer?
              </span>
            </label>

            <label
              style={{
                background:
                  "linear-gradient(to left, var(--color-aliceBlue), var(--color-periwinkleBlue))",
              }}
              className={`w-full flex items-center space-x-4  px-4 py-3 rounded-3xl cursor-pointer ${
                selectedOption === "finder" ? "bg-opacity-100" : "bg-opacity-50"
              }`}
            >
              <input
                type="radio"
                name="accountType"
                className="hidden"
                checked={selectedOption === "finder"}
                onChange={() => setSelectedOption("finder")}
              />
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  selectedOption === "finder"
                    ? "border-[#FFFFFFFF] bg-[#0057ff]"
                    : "border-[#FFFFFFFF]"
                }`}
              />
              <span className="text-gray-700 font-medium">
                Are you finding a photographer?
              </span>
            </label>
          </div>

          {/* Button */}
          <Button
            onClick={handleRoutePages}
            name="Get Start"
            bgColor="#0057ff"
            borderColor="#0057ff"
            iconBgColor="white"
            borderRadius="50px"
            fontWeight="400"
            fontSize="20px"
            paddingTop="10px"
            paddingBottom="10px"
          />
        </div>

        {/* Right Section - Hidden on Small Screens */}
        <div className="p-2 hidden md:block w-1/2 relative">
          <div className="relative w-full h-100 md:h-120 rounded-3xl overflow-hidden shadow-lg">
            <img
              src={Image}
              alt="Couple at Beach"
              className="w-200 h-full object-cover"
            />
          </div>

          {/* Floating Comments */}

          <div
            style={{
              background:
                "radial-gradient(circle, var(--color-periwinkleBlue) , var(--color-aliceBlue) )",
            }}
            className="absolute bottom-2 left-0 bg-white bg-opacity-80 p-4 rounded-2xl shadow-md w-70"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div>
                <h4 className="font-bold text-gray-800">Maal Gamage</h4>
                <p className="text-xs text-gray-500">Business Analyst</p>
              </div>
            </div>
            <p className="text-xs text-gray-700 mt-2">
              Lorem ipsum is simply dummy text of the printing industry.
            </p>
          </div>

          <div
            style={{
              background:
                "radial-gradient(circle, var(--color-periwinkleBlue) , var(--color-aliceBlue) )",
            }}
            className="absolute bottom-70 left-60 bg-white bg-opacity-80 p-4 rounded-2xl shadow-md w-auto"
          >
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-black rounded-full"></div>
              <div>
                <h5 className="font-bold text-[10px] text-gray-800">
                  Maal Gamage
                </h5>
                <p className="text-[10px] text-gray-500">Business Analyst</p>
              </div>
            </div>
            <p className="text-[9px] text-gray-700 mt-2">
              Lorem ipsum is simply dummy text of the printing industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
