import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Image from "./../../assets/User LogIn Images/2.jpg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Fingerprint, MoveLeft } from "lucide-react";

// InputField Component with required field handling
const InputField = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  label,
  error,
  required = true,
}) => (
  <div className="relative mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <Icon className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`pl-12 py-3 rounded-2xl border ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        } w-full focus:outline-none focus:ring-2`}
      />
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Dots Component (unchanged)
const DotsContainer = () => (
  <div className="flex flex-row gap-3 mt-5 lg:mt-30 absolute lg:bottom-10 bottom-2 md:left-1/4 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 ">
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#212121FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
  </div>
);

const UserLoginPage2 = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Pass email to the next page using navigate state
    navigate("/PhotographerLoginPage3", {
      state: { email },
    });
  };

  const handlePrevPage = () => {
    navigate("/PhotographerLoginPage1");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 p-4 sm:p-8 relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))",
      }}
    >
      {/* Background for Small Screens */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Form Section */}
        <div className="flex flex-col justify-center p-6 sm:p-8 w-full">
          <Fingerprint className="w-12 p-2 mb-2 h-auto border border-gray-400 rounded-xl" />

          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Forgot password?
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Login to continue using our platform.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col"
            noValidate
          >
            {/* Email Input */}
            <InputField
              icon={FiMail}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              error={error}
              required={true}
            />

            <Button
              type="submit"
              name="Reset Password"
              bgColor="#0057ff"
              borderColor="#0057ff"
              iconBgColor="white"
              borderRadius="10px"
              fontWeight="400"
              fontSize="20px"
              paddingTop="10px"
              paddingBottom="10px"
            />

            <div className="flex flex-row gap-2 items-center justify-center mt-12">
              <a className="flex gap-3 cursor-pointer" onClick={handlePrevPage}>
                <MoveLeft />
                <p>Back to login</p>
              </a>
            </div>

            {/* Dots Container */}
            <DotsContainer />
          </form>
        </div>

        {/* Image Section for Large Screens */}
        <div className="relative hidden sm:flex items-center justify-center p-5 h-full">
          <img
            src={Image}
            alt="Welcome Back"
            className="w-full h-full object-cover rounded-3xl"
          />

          <div className="flex items-center justify-center absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="absolute rounded-3xl opacity-90 w-82 h-25 shadow-lg"
              style={{
                background:
                  "radial-gradient(circle, var(--color-periwinkleBlue) , var(--color-aliceBlue) )",
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

export default UserLoginPage2;
