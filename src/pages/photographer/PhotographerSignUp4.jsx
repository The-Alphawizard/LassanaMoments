// PhotographerSignUp4.jsx
import React, { useState, useCallback } from "react";
import Image from "../../images/Photographer SignUp Images/4.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import { useUser } from "../../context/UserContext";
// Add these styles to your CSS file or use a CSS-in-JS solution
const styles = {
  gradientBackground: {
    background:
      "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))",
  },
  testimonialGradient: {
    background:
      "radial-gradient(circle, var(--color-periwinkleBlue), var(--color-aliceBlue))",
  },
  primaryText: {
    color: "var(--color-primaryText)",
  },
};

const PhotographerSignUp4 = () => {
  const navigate = useNavigate();

  const { updatePhotographerDetails } = useUser();
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleNextRoutePages = () => {
    if (!profileImage) {
      setError("Please upload a profile image before continuing");
      return;
    }
    updatePhotographerDetails({
      profileImage: profileImage,
    });

    navigate("/PhotographerSignUp5");
  };

  const handlePrevRoutePages = () => {
    navigate("/PhotographerSignUp3");
  };

  const validateAndProcessFile = (file) => {
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      return false;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return false;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
      setError("");
    };
    reader.readAsDataURL(file);
    return true;
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      validateAndProcessFile(file);
    }
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      validateAndProcessFile(files[0]);
    }
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8 relative"
      style={styles.gradientBackground}
    >
      {/* Mobile background image */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main container */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Left side - Image and testimonial */}
        <div className="relative hidden sm:flex items-center justify-center p-5 h-full">
          <img
            src={Image}
            alt="Signup"
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Testimonial overlay */}
          {/* <div className="flex items-center justify-center absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute rounded-3xl opacity-90 w-82 h-35 shadow-lg" style={styles.testimonialGradient}></div>
            
            <div className="relative text-left p-6">
              <p className="text-gray-500 text-[7px]">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type.
              </p>

              <div className="flex flex-row items-center mt-2">
                <div className="w-13 h-13 rounded-full bg-black border-2 mr-2"></div>
                <div className="flex flex-col">
                  <h1 className="text-[21px] font-semibold">Maal Gamage</h1>
                  <p className="text-gray-500 text-[14px]">Business analyst</p>
                </div>
              </div>

              <div className="flex gap-3 mt-3 justify-center items-center">
                <div className="rounded-full bg-[#FFA200FF] w-2 h-2 shadow-lg"></div>
                <div className="rounded-full bg-[#12003CFF] w-2 h-2 shadow-lg"></div>
                <div className="rounded-full bg-[#12003CFF] w-2 h-2 shadow-lg"></div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right side - Upload form */}
        <div className="flex flex-col justify-center p-6 sm:p-8 w-full">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={styles.primaryText}
          >
            Setup your profile image
          </h1>
          <p className="text-gray-500 text-sm mb-2">
            Upload your profile image <span className="text-red-500">*</span>
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {/* Upload box */}
          <div
            className={`
              flex flex-col h-auto p-12 items-center mb-6 w-full rounded-xl 
              border-2 border-dashed transition-colors duration-200
              ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}
              hover:border-blue-400 hover:bg-blue-50
            `}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {/* Profile image preview */}
            <div className="rounded-full w-20 h-20 bg-gray-200 overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Uploaded Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-4xl text-gray-400">+</span>
                </div>
              )}
            </div>

            {/* Upload instructions */}
            <label className="mt-2 text-[14px] text-gray-400 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
                required
              />
              {isDragging ? (
                "Drop your image here"
              ) : (
                <>
                  Drag and drop or{" "}
                  <span className="underline text-blue-600">Browse</span>
                </>
              )}
            </label>
            <p className="text-xs text-gray-400 mt-2">Maximum file size: 5MB</p>
          </div>

          {/* Navigation buttons */}
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
              name="Continue"
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
