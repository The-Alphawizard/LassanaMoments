// UserSignUp3

import React, { useState } from "react";
import UserImg from "../../images/user/user.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useUser } from '../../context/UserContext';


const UserSignUp3 = () => {
  const navigate = useNavigate();
  const { updateUserDetails } = useUser();

  const handleNextRoutePages = () => {
    navigate("/UserSignUp2");
  };
  const handlePrevRoutePages = () => {
    navigate("/UserSignUp4");
  };
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setProfileImage(imageUrl);
        updateUserDetails({ profileImage: imageUrl });
      };
      reader.readAsDataURL(file);
    }
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
          <div
            className="p-3 rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom,  var(--color-periwinkleBlue) ,#ffffff)",
            }}
          >
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center mb-8">
              <div className="rounded-full w-20 h-20 bg-black">
                <img
                  src={UserImg}
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <span className="text-[11px] text-gray-400 mb-4">
                Upload your profile image
              </span>
              <div className="border-1 border-gray-300 rounded-2xl p-2 flex flex-col items-center justify-center">
                <div className="relative w-22 h-22 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Uploaded Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col justify-center items-center h-full">
                      <span className="text-4xl text-gray-400">+</span>
                    </div>
                  )}
                </div>
                <label className="text-gray-400 text-[11px] mt-2 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  Drag and drop or{" "}
                  <span className="underline text-blue-600">Browse</span>
                </label>
              </div>
            </div>
          </div>

          {/* Step Indicator */}
          <div className="flex gap-2 mb-3 justify-center items-center">
            <div className="rounded-full bg-[var(--color-primaryText)] w-2 h-2 shadow-lg"></div>
            <div className="rounded-full bg-[#FFA200FF] w-2 h-2 shadow-lg"></div>
            <div className="rounded-full bg-[var(--color-primaryText)] w-2 h-2 shadow-lg"></div>
          </div>

          {/* Title and Description */}
          <h2
            className="text-lg font-semibold  mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Setup your profile
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

export default UserSignUp3;
