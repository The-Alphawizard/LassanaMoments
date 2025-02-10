import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Image from "./../../assets/User LogIn Images/1.jpg";
import fb from "./../../assets/User LogIn Images/facebook.png";
import google from "./../../assets/User LogIn Images/google.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

// InputField Component with required field handling
const InputField = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  label,
  error
}) => (
  <div className="relative mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <Icon className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className={`pl-12 py-3 rounded-full border ${
          error ? 'border-red-500' : 'border-gray-300'
        } w-full focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        }`}
      />
    </div>
    {error && (
      <p className="text-red-500 text-xs mt-1">{error}</p>
    )}
  </div>
);

const UserLoginPage1 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleRoutePagesSignUp = () => {
    navigate("/PhotographerSignUp1");
  };

  const handleRoutePages = () => {
    navigate("/");
  };

  const handleReset = () => {
    navigate("/PhotographerLoginPage2");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: ""
    };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Email:", email, "Password:", password);
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

          <div className="flex items-center justify-center gap-3 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full bg-[#FFFFFFFF] w-2 h-2 shadow-lg"></div>
            <div className="rounded-full bg-[#FFFFFFFF] w-2 h-2 shadow-lg"></div>
            <div className="rounded-full bg-[#FFFFFFFF] w-2 h-2 shadow-lg"></div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center p-6 sm:p-8 w-full">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Welcome Back!
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Login to continue using our platform.
          </p>
          <form onSubmit={handleSubmit} className="w-full" noValidate>
            <InputField
              icon={FiMail}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              error={errors.email}
            />
            <InputField
              icon={FiLock}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              error={errors.password}
            />
            <a onClick={handleReset} className="text-blue-500 mb-4 block text-right text-sm cursor-pointer">
              Forgot Password?
            </a>
            <Button
              type="submit"
              name="Login"
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
              <p>or</p>
              <div className="bg-gray-300 h-[2px] w-full"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex items-center justify-center mt-4 gap-4">
              <a
                href="#"
                className="border border-gray-300 rounded-xl p-2 flex gap-2 items-center font-semibold"
              >
                <img src={google} alt="Google" className="w-6 h-6" />
                <p>Google</p>
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-xl p-2 flex gap-2 items-center font-semibold"
              >
                <img src={fb} alt="Facebook" className="w-6 h-6" />
                <p>Facebook</p>
              </a>
            </div>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-400 text-sm">
                Don't have an account?
              </span>
              <a
                onClick={handleRoutePagesSignUp}
                className="text-blue-500 hover:underline text-sm ml-2 cursor-pointer"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage1;