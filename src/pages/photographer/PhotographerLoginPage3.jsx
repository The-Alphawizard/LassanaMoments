import React, { useState, useRef, useEffect } from "react";
import { Mail } from "lucide-react";
import { MoveLeft } from "lucide-react";
import Image from "./../../assets/User LogIn Images/3.jpg";
import Button from "../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

// OTP Input Component with validation
const OTPInput = ({ value, onChange, error }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleInput = (e, index) => {
    const newValue = e.target.value;
    if (newValue.match(/^[0-9]$/)) {
      onChange(e, index);
      if (index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            required
            className={`flex-row items-left w-12 h-12 text-center text-xl font-bold border-2 
              ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-400"
              }
              rounded-lg focus:outline-none focus:ring-2`}
            value={value[index] || ""}
            onChange={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

// Dots Component
const DotsContainer = () => (
  <div className="flex flex-row gap-3 mt-5 lg:mt-30 absolute lg:bottom-10 bottom-2 md:left-1/4 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2">
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#212121FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
    <div className="rounded-full bg-[#B0B0B0FF] w-2 h-2 shadow-lg"></div>
  </div>
);

const UserLoginPage3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = location.state?.email || "example@email.com";

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);

  const handleOTPChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    setError("");
  };

  const validateOTP = () => {
    if (otp.some((digit) => digit === "")) {
      setError("Please enter all 4 digits of the OTP");
      return false;
    }
    if (!otp.every((digit) => /^[0-9]$/.test(digit))) {
      setError("OTP must contain only numbers");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateOTP()) {
      console.log("Entered OTP:", otp.join(""));
      navigate("/PhotographerLoginPage4");
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      setOtp(["", "", "", ""]);
      setError("");
    }, 2000);
  };

  const handlePrevPage = () => {
    navigate("/PhotographerLoginPage2");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 p-4 sm:p-8 relative"
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
          <Mail className="w-12 p-2 mb-2 h-auto border border-gray-400 rounded-xl" />

          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Password reset
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            We sent a code to <span className="font-semibold">{userEmail}</span>
          </p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            {/* OTP Inputs */}
            <OTPInput value={otp} onChange={handleOTPChange} error={error} />

            {/* Continue Button */}
            <div className="mt-5">
              <Button
                type="submit"
                name="Continue"
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

            {/* Resend Code */}
            <p className="text-gray-500 text-sm mt-4">
              Didn't receive the email?{" "}
              <button
                type="button"
                onClick={handleResendCode}
                disabled={isResending}
                className="text-blue-500 font-semibold cursor-pointer disabled:opacity-50"
              >
                {isResending ? "Resending..." : "Click to resend"}
              </button>
            </p>

            {/* Back to Login */}
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

export default UserLoginPage3;
