import React, { useState } from "react";
import { Lock, MoveLeft, Eye, EyeOff } from "lucide-react";
import Image from "./../../assets/User LogIn Images/4.jpg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

// Password Input Component
const PasswordInput = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  showPassword,
  togglePassword,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} <span className="text-red-500">*</span>
    </label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={`w-full p-3 pr-10 border ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        } rounded-lg focus:outline-none focus:ring-2`}
        value={value}
        onChange={onChange}
        required
        minLength={8}
      />
      <button
        type="button"
        onClick={togglePassword}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

// Password Requirements Component
const PasswordRequirements = ({ password }) => {
  const requirements = [
    { test: /.{8,}/, text: "At least 8 characters" },
    { test: /[A-Z]/, text: "One uppercase letter" },
    { test: /[a-z]/, text: "One lowercase letter" },
    { test: /[0-9]/, text: "One number" },
    { test: /[!@#$%^&*]/, text: "One special character" },
  ];

  return (
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-700 mb-2">
        Password must contain:
      </p>
      <div className="space-y-1">
        {requirements.map((req, index) => (
          <div key={index} className="flex items-center text-sm">
            <div
              className={`w-2 h-2 rounded-full mr-2 ${
                req.test.test(password) ? "bg-green-500" : "bg-gray-300"
              }`}
            />
            <span
              className={
                req.test.test(password) ? "text-green-600" : "text-gray-500"
              }
            >
              {req.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Dots Component (unchanged)
const DotsContainer = () => (
  <div className="flex flex-row gap-3 mt-5 lg:mt-30  absolute lg:bottom-10 xl:bottom-3 bottom-2 md:left-1/4 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#212121FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
  </div>
);

const UserLoginPage4 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const requirements = {
      length: /.{8,}/,
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[!@#$%^&*]/,
    };

    return Object.entries(requirements).every(([key, regex]) =>
      regex.test(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePassword(password)) {
      newErrors.password = "Password does not meet all requirements";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("New Password Set:", password);
    navigate("/UserLoginPage5");
  };

  const handlePrevPage = () => {
    navigate("/UserLoginPage3");
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
        {/* Form Section */}
        <div className="flex flex-col justify-center p-6 sm:p-8 w-full">
          <Lock className="w-12 p-2 mb-2 h-auto border border-gray-400 rounded-xl" />

          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Set new password
          </h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            <PasswordRequirements password={password} />

            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
              placeholder="Enter your password"
              error={errors.password}
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
            />

            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors({ ...errors, confirmPassword: "" });
              }}
              placeholder="Confirm your password"
              error={errors.confirmPassword}
              showPassword={showConfirmPassword}
              togglePassword={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            />

            <div className="mt-5">
              <Button
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

            {/* Back to Login */}
            <div className="flex flex-row gap-2 items-center justify-center mt-5">
              <a className="flex gap-3 cursor-pointer" onClick={handlePrevPage}>
                <MoveLeft />
                <p>Back to login</p>
              </a>
            </div>

            {/* Dots Container */}
            <DotsContainer />
          </form>
        </div>

        {/* Image Section */}
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

export default UserLoginPage4;
