import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Image from "../../images/Photographer SignUp Images/1.jpg";
import fb from "./../../assets/User SignUp Images/facebook.png";
import google from "./../../assets/User SignUp Images/google.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import { useUser } from "../../context/UserContext";
// Reusable InputField Component with validation
const InputField = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  label,
  error,
  required = true,
  onBlur,
}) => (
  <div className="relative mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`pl-12 py-3 rounded-full border ${
          error ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"
        } w-full focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1 ml-4">{error}</p>}
    </div>
  </div>
);

const PhotographerSignUp1 = () => {
  const navigate = useNavigate();

  const { updatePhotographerDetails } = useUser();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const validateField = (name, value) => {
    switch (name) {
      case "firstname":
      case "lastname":
        return value.trim() === ""
          ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
          : "";
      case "email":
        return !value
          ? "Email is required"
          : !/\S+@\S+\.\S+/.test(value)
          ? "Please enter a valid email address"
          : "";
      case "password":
        return !value
          ? "Password is required"
          : value.length < 8
          ? "Password must be at least 8 characters long"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleRoutePagesLogin = () => {
    navigate("/PhotographerLoginPage1");
  };

  const handleRoutePages = () => {
    navigate("/PhotographerSignUp2");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      firstname: validateField("firstname", formData.firstname),
      lastname: validateField("lastname", formData.lastname),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every((error) => error === "")) {
      // Update the context with the photographer's initial details
      updatePhotographerDetails({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        username: `${formData.firstname.toLowerCase()}.${formData.lastname.toLowerCase()}`, // Generate a default username
        userType: "photographer",
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
        {/* Image Section - Same as before */}
        <div className="relative hidden sm:flex items-center justify-center p-5 h-full">
          <img
            src={Image}
            alt="Welcome Back"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Text Overlay - Same as before */}
          {/* ... (previous overlay content remains unchanged) ... */}
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
          <form onSubmit={handleSubmit} className="w-full" noValidate>
            <div className="flex row gap-2">
              <InputField
                type="text"
                value={formData.firstname}
                onChange={(e) =>
                  handleChange({
                    target: { name: "firstname", value: e.target.value },
                  })
                }
                onBlur={(e) =>
                  handleBlur({
                    target: { name: "firstname", value: e.target.value },
                  })
                }
                label="First Name"
                error={errors.firstname}
                name="firstname"
              />
              <InputField
                type="text"
                value={formData.lastname}
                onChange={(e) =>
                  handleChange({
                    target: { name: "lastname", value: e.target.value },
                  })
                }
                onBlur={(e) =>
                  handleBlur({
                    target: { name: "lastname", value: e.target.value },
                  })
                }
                label="Last Name"
                error={errors.lastname}
                name="lastname"
              />
            </div>
            <InputField
              icon={FiMail}
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                handleChange({
                  target: { name: "email", value: e.target.value },
                })
              }
              onBlur={(e) =>
                handleBlur({ target: { name: "email", value: e.target.value } })
              }
              label="Email"
              error={errors.email}
              name="email"
            />
            <InputField
              icon={FiLock}
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                handleChange({
                  target: { name: "password", value: e.target.value },
                })
              }
              onBlur={(e) =>
                handleBlur({
                  target: { name: "password", value: e.target.value },
                })
              }
              label="Password"
              error={errors.password}
              name="password"
            />

            <Button
              onClick={handleSubmit}
              name="Sign Up"
              bgColor="#0057ff"
              borderColor="#0057ff"
              iconBgColor="white"
              borderRadius="50px"
              fontWeight="400"
              fontSize="20px"
              paddingTop="10px"
              paddingBottom="10px"
            />

            {/* Rest of the component remains the same */}
            <div className="flex items-center justify-center mt-6 gap-4">
              <div className="bg-gray-300 h-[2px] w-full"></div>
              <p className="text-gray-500">or</p>
              <div className="bg-gray-300 h-[2px] w-full"></div>
            </div>

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
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-400 text-sm">
                Don't have an account?
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

export default PhotographerSignUp1;
