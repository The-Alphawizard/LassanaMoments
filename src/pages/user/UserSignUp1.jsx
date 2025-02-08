// UserSignUp1.jsx
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Image from "./../../assets/User SignUp Images/1.jpg";
import fb from "./../../assets/User SignUp Images/facebook.png";
import google from "./../../assets/User SignUp Images/google.png";
import { useUser } from '../../context/UserContext';

// Reusable InputField Component
const InputField = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  label,
  error,
}) => (
  <div className="relative mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label}
    </label>
    <div className="relative ">
      {Icon && (
        <Icon className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400 " />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`pl-12 py-3 rounded-full border ${
          error ? "border-red-500" : "border-gray-300"
        } w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="text-red-500 text-xs mt-1 ml-5">{error}</p>}
    </div>
  </div>
);

const UserSignUp1 = () => {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [errors, setErrors] = useState({});

  const { updateUserDetails } = useUser();

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // First name validation
    if (!firstname.trim()) {
      newErrors.firstname = "First name is required";
    }

    // Last name validation
    if (!lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRoutePages = () => {
    if (validateForm()) {
      navigate("/UserSignUp2");
    }
  };
  const handleRoutePagesLogin = () => {
    navigate("/UserLoginPage1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      updateUserDetails({
        firstname,
        lastname,
        email,
        password,
      });
      handleRoutePages();
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
      {/* Background for Small Screens */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Image Section for Large Screens */}
        <div className="relative hidden sm:flex items-center justify-center p-5 h-full">
          <img
            src={Image}
            alt="Welcome Back"
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
            <div className="relative text-left p-6">
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

        {/* Form Section */}
        <div className="flex flex-col justify-center p-6 sm:p-8 w-full">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Get Started
          </h1>
          <p className="text-gray-500 text-sm mb-6">Create your account now</p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col sm:flex-row gap-2 ">
              {/* First Name Input */}
              <InputField
                type="text"
                // placeholder="Enter your first name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                label="First Name"
                error={errors.firstname}
              />
              {/* Last Name Input */}
              <InputField
                type="text"
                // placeholder="Enter your last name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                label="Last Name"
                error={errors.lastname}
              />
            </div>

            {/* Email Input */}
            <InputField
              icon={FiMail}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              error={errors.email}
            />

            {/* Password Input */}
            <InputField
              icon={FiLock}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              error={errors.password}
            />

            <Button
              onClick={handleRoutePages}
              name="Get Started"
              bgColor="#0057ff"
              borderColor="#0057ff"
              iconBgColor="white"
              borderRadius="50px"
              fontWeight="400"
              fontSize="20px"
              paddingTop="10px"
              paddingBottom="10px"
            />

            {/* Divider */}
            <div className="flex items-center justify-center mt-6 gap-4">
              <div className="bg-gray-300 h-[2px] w-full"></div>
              <p className="text-gray-500">or</p>
              <div className="bg-gray-300 h-[2px] w-full"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex items-center justify-center mt-4 gap-4">
              <a
                href="#"
                className="border border-gray-300 rounded-xl p-2 flex gap-2 items-center font-semibold hover:bg-gray-50 transition"
              >
                <img src={google} alt="Google" className="w-6 h-6" />
                <p>Google</p>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-xl p-2 flex gap-2 items-center font-semibold hover:bg-gray-50 transition"
              >
                <img src={fb} alt="Facebook" className="w-6 h-6" />
                <p>Facebook</p>
              </a>
            </div>

            {/* Login Link */}
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-400 text-sm">
                Already have an account?
              </span>
              <a
                onClick={handleRoutePagesLogin}
                className="text-blue-500 hover:underline text-sm ml-2 cursor-pointer"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp1;
