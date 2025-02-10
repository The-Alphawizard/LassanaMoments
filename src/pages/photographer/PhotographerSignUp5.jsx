import React from "react";
import Image from "../../images/Photographer SignUp Images/5.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const PhotographerSignUp4 = () => {
  const navigate = useNavigate();

  const handleNextRoutePages = () => {
    // Add a success message or animation before navigation if desired
    navigate("/");
  };

  const handlePrevRoutePages = () => {
    // Fix the navigation to go to the previous page (signup3) instead of signup4
    navigate("/PhotographerSignUp3");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 p-4 sm:p-8 relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))",
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="relative hidden sm:flex items-center justify-center p-5 h-full">
          <img
            src={Image}
            alt="Signup Complete"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Text Overlay */}
          <div className="flex items-center justify-center absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Radial Gradient Background */}
            <div
              className="absolute rounded-3xl opacity-90 w-82 h-35 shadow-lg"
              style={{
                background:
                  "radial-gradient(circle, var(--color-periwinkleBlue), var(--color-aliceBlue))",
              }}
            ></div>

            {/* Overlay Content */}
            <div className="relative text-left">
              <p className="text-gray-500 text-[7px]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type.
              </p>

              {/* User Info */}
              <div className="flex flex-row items-center mt-2">
                <div className="w-13 h-13 rounded-full bg-black border-2 mr-2"></div>
                <div className="flex flex-col">
                  <h1 className="text-[21px] font-semibold">Maal Gamage</h1>
                  <p className="text-gray-500 text-[14px]">Business analyst</p>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex gap-3 mt-3 justify-center items-center">
                <div className="rounded-full bg-[#FFA200FF] w-2 h-2 shadow-lg"></div>
                <div className="rounded-full bg-[#12003CFF] w-2 h-2 shadow-lg"></div>
                <div className="rounded-full bg-[#12003CFF] w-2 h-2 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 w-full">
          <div className="text-center mb-8">
            <h1
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: "var(--color-primaryText)" }}
            >
              All done!
            </h1>
            <p className="text-gray-500 text-lg mb-2">Your account has been created successfully</p>
            <p className="text-gray-500 text-sm">Let's go to your dashboard and start exploring</p>
          </div>

          <div className="flex justify-center gap-3 w-full mt-30 bottom-2">
            <Button
              onClick={handlePrevRoutePages}
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
              onClick={handleNextRoutePages}
              name="Dashboard"
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

export default PhotographerSignUp4;