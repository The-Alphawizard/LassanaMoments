import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import Image from "../../images/Photographer SignUp Images/2.jpg";
import fb from "./../../assets/User SignUp Images/facebook.png";
import google from "./../../assets/User SignUp Images/google.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

// Reusable InputField Component with validation
const InputField = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  label,
  multiline,
  error,
  required = true,
  onBlur,
  name
}) => (
  <div className="relative mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {multiline ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          required={required}
          className={`p-3 rounded-2xl border ${
            error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
          } w-full focus:outline-none focus:ring-2 ${
            error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
          } h-24 resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          required={required}
          className={`pl-4 py-3 rounded-2xl border ${
            error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
          } w-full focus:outline-none focus:ring-2 ${
            error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
          }`}
        />
      )}
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-4">{error}</p>
      )}
    </div>
  </div>
);

const PhotographerSignUp2 = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phone: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    about: "",
    phone: ""
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return !value.trim() ? "Name is required" : 
               value.length < 2 ? "Name must be at least 2 characters long" : "";
      case "about":
        return !value.trim() ? "About section is required" : 
               value.length < 10 ? "Please provide at least 10 characters about yourself" : "";
      case "phone":
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        return !value.trim() ? "Phone number is required" : 
               !phoneRegex.test(value) ? "Please enter a valid phone number" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleNextRoutePages = () => {
    // Validate all fields before navigation
    const newErrors = {
      name: validateField("name", formData.name),
      about: validateField("about", formData.about),
      phone: validateField("phone", formData.phone)
    };

    setErrors(newErrors);

    // Only navigate if there are no errors
    if (Object.values(newErrors).every(error => error === "")) {
      navigate("/PhotographerSignUp3");
    }
  };

  const handlePrevRoutePages = () => {
    navigate("/PhotographerSignUp1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      about: validateField("about", formData.about),
      phone: validateField("phone", formData.phone)
    };

    setErrors(newErrors);

    // Process form if there are no errors
    if (Object.values(newErrors).every(error => error === "")) {
      console.log("Form data:", formData);
      handleNextRoutePages();
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 p-4 sm:p-8 relative"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-aliceBlue), var(--color-periwinkleBlue))"
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Image Section remains the same */}
        <div className="relative hidden sm:flex items-center justify-center p-5 h-full">
          <img
            src={Image}
            alt="Signup"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Text Overlay content remains the same */}
          <div className="flex items-center justify-center absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Previous overlay content remains unchanged */}
          </div>
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8 w-full">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Setup your account
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Create your username, bio, and phone
          </p>
          <form onSubmit={handleSubmit} className="w-full" noValidate>
            <InputField
              type="text"
              value={formData.name}
              onChange={(e) => handleChange({ target: { name: 'name', value: e.target.value } })}
              onBlur={(e) => handleBlur({ target: { name: 'name', value: e.target.value } })}
              label="Setup your name"
              placeholder="Enter your name"
              error={errors.name}
              name="name"
            />
            <InputField
              multiline
              value={formData.about}
              onChange={(e) => handleChange({ target: { name: 'about', value: e.target.value } })}
              onBlur={(e) => handleBlur({ target: { name: 'about', value: e.target.value } })}
              label="Briefly explain about you"
              placeholder="Tell us about yourself"
              error={errors.about}
              name="about"
            />
            <InputField
              icon={FiPhone}
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange({ target: { name: 'phone', value: e.target.value } })}
              onBlur={(e) => handleBlur({ target: { name: 'phone', value: e.target.value } })}
              label="Add your phone number"
              placeholder="Enter your phone number"
              error={errors.phone}
              name="phone"
            />
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
                onClick={handleSubmit}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhotographerSignUp2;