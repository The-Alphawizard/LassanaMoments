import React, { useState } from "react";
import { Bell, MapPin, CircleUserRound, PenLine } from "lucide-react";
import Work from "./Work";
import Draft from "./Draft";
import Reviews from "./Reviews";
import YourState from "./Your State"; // Import the new component
import Profile from "../../../images/Photographer Dashboard-Photographer Side-Images/men.jpg"; //men
import Cover from "../../../images/Photographer Dashboard-Photographer Side-Images/1.jpg"; // 1.jpg
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../../components/Button";

export function DashboardUserSide() {
  const handleEditProfile = () => {
    navigate("/EditProfile");
  };
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="w-full min-h-full">
      {/* =========================
          MOBILE LAYOUT (block md:hidden)
      ========================== */}
      <div className="block md:hidden">
        {/* Cover Section */}
        <div className="relative h-48">
          <img src={Cover} alt="Cover" className="w-full h-full object-cover" />
          {/* Profile Image (centered, circular) */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-36 h-36 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Container */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 mt-20">
          {/* Profile Info */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Maal Gamage
            </h1>
            <p className="text-gray-500 text-lg">@maalgamage</p>
            <p className="text-gray-900 font-medium text-lg">Photographer</p>
          </div>

          {/* Buttons & Stats */}
          <div className="flex flex-col items-center gap-6 mt-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-3 z-50">
              {/* <button onClick={handleEditProfile}
              className=" cursor-pointer px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 text-sm sm:text-base">
                <PenLine size={18} sm:size={20} />
                Edit Profile
              </button> */}
              <Button
                onClick={handleEditProfile}
                icon={<PenLine />}
                type="submit"
                name="Edit Profile"
                bgColor="#0057ff"
                borderColor="#0057ff"
                iconBgColor=""
                borderRadius="50px"
                fontWeight="600"
                fontSize="17px"
                // paddingTop="5px"
                // paddingBottom="5px"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-gray-900">
                  12k
                </span>
                <span className="text-gray-500">Followers</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-gray-900">
                  998
                </span>
                <span className="text-gray-500">Following</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-bold text-gray-900">
                  51k
                </span>
                <span className="text-gray-500">Likes</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b mt-8">
            <div className="flex justify-center gap-8">
              <button
                onClick={() => setActiveTab("work")}
                className={`py-4 px-1 relative font-medium ${
                  activeTab === "work" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                Work
                {activeTab === "work" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 relative font-medium ${
                  activeTab === "reviews" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                Reviews
                {activeTab === "reviews" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("yourState")}
                className={`py-4 px-1 relative font-medium ${
                  activeTab === "yourState" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                Your State
                {activeTab === "yourState" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
              <button
                onClick={() => setActiveTab("draft")}
                className={`py-4 px-1 relative font-medium ${
                  activeTab === "draft" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                Draft
                {activeTab === "draft" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "work" ? (
              <Work />
            ) : activeTab === "reviews" ? (
              <Reviews />
            ) : activeTab === "yourState" ? (
              <YourState />
            ) : (
              <Draft />
            )}
          </div>
        </div>
      </div>

      {/* =========================
          DESKTOP LAYOUT (hidden md:block)
      ========================== */}
      <div className="hidden md:block">
        {/* Header Gradient */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500/80 via-purple-50/80 to-blue-50/80">
          <img src={Cover} className="w-full h-full object-cover" />
        </div>

        {/* Container */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div
              className="h-full sticky top-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))",
              }}
            >
              {/* Mobile Profile Header (hidden on desktop) */}
              <div className="md:hidden flex flex-col items-center">
                <div className="w-52 h-52 rounded-[24px] border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Sidebar for Desktop */}
              <div className="hidden md:block w-full max-w-[320px] sm:w-80 shrink-0 p-4 sm:p-6">
                {/* Profile Section */}
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-4">
                  <div className="relative flex flex-col items-center">
                    <div className="w-32 h-32 sm:w-[200px] sm:h-[200px] -mt-16 sm:-mt-32 rounded-[24px] border-4 sm:border-8 border-white shadow-lg overflow-hidden mb-6 sm:mb-12 mx-auto">
                      <img
                        src={Profile}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h2 className="font-medium mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base justify-center sm:justify-start">
                    <CircleUserRound className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>About me</span>
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type.
                  </p>
                </div>

                {/* Location Section */}
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-4">
                  <h2 className="font-medium mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base justify-center sm:justify-start">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Location</span>
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    Level 5, Hemas House No 75 Bray-brooke Place Colombo 02
                  </p>
                </div>

                {/* Stats Section */}
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-4">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Project Views</span>
                    <span className="font-medium">525,829</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm mt-2">
                    <span className="text-gray-600">Appreciations</span>
                    <span className="font-medium">21,751</span>
                  </div>
                </div>

                {/* Member Since */}
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <span className="text-gray-600 text-xs sm:text-sm">
                    Member Since
                  </span>
                  <span className="font-medium block text-xs sm:text-sm mt-1">
                    December 28, 2018
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Desktop Profile Header */}
              <div className="md:flex flex-col md:flex-row justify-between items-center md:items-start w-full">
                {/* User Details */}
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-[2.75rem] font-bold text-gray-900 tracking-tight">
                      Maal Gamage
                    </h1>
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-500 text-lg">@maalgamage</p>
                      <p className="text-gray-900 font-medium text-lg">
                        Photographer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons & Stats */}
                <div className="relative mt-12 md:mt-0">
                  <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        onClick={handleEditProfile}
                        icon={<PenLine />}
                        type="submit"
                        name="Edit Profile"
                        bgColor="#0057ff"
                        borderColor="#0057ff"
                        iconBgColor=""
                        borderRadius="50px"
                        fontWeight="600"
                        fontSize="17px"
                        // paddingTop="5px"
                        // paddingBottom="5px"
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                      <div className="text-center">
                        <span className="block text-2xl md:text-[2rem] font-bold text-gray-900">
                          12k
                        </span>
                        <span className="text-gray-500">Followers</span>
                      </div>
                      <div className="text-center">
                        <span className="block text-2xl md:text-[2rem] font-bold text-gray-900">
                          998
                        </span>
                        <span className="text-gray-500">Following</span>
                      </div>
                      <div className="text-center">
                        <span className="block text-2xl md:text-[2rem] font-bold text-gray-900">
                          51k
                        </span>
                        <span className="text-gray-500">Likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-b mb-6">
                <div className="flex gap-8">
                  <button
                    onClick={() => setActiveTab("work")}
                    className={`py-4 px-1 relative font-medium ${
                      activeTab === "work" ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    Work
                    {activeTab === "work" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`py-4 px-1 relative font-medium ${
                      activeTab === "reviews"
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    Reviews
                    {activeTab === "reviews" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("yourState")}
                    className={`py-4 px-1 relative font-medium ${
                      activeTab === "yourState"
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    Your State
                    {activeTab === "yourState" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("draft")}
                    className={`py-4 px-1 relative font-medium ${
                      activeTab === "draft" ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    Draft
                    {activeTab === "draft" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "work" ? (
                <Work />
              ) : activeTab === "reviews" ? (
                <Reviews />
              ) : activeTab === "yourState" ? (
                <YourState />
              ) : (
                <Draft />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardUserSide;
