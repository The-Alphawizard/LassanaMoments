import React, { useState } from "react";
import Image from "../../images/Photographer SignUp Images/3.jpg";
import fb from "./../../assets/User SignUp Images/facebook.png";
import google from "./../../assets/User SignUp Images/google.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const InputField = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  label,
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
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        required={required}
        className={`pl-4 py-2 rounded-2xl border ${
          error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
        } w-full focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        }`}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-4">{error}</p>
      )}
    </div>
  </div>
);

const PhotographerSignUp3 = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    country: "",
    district: "",
    division: "",
    address: ""
  });

  const [errors, setErrors] = useState({
    country: "",
    district: "",
    division: "",
    address: ""
  });

  const validateField = (name, value) => {
    switch (name) {
      case "country":
        return !value.trim() 
          ? "Country is required" 
          : value.length < 2 
          ? "Please enter a valid country name" 
          : "";
      case "district":
        return !value.trim() 
          ? "District is required" 
          : value.length < 2 
          ? "Please enter a valid district name" 
          : "";
      case "division":
        return !value.trim() 
          ? "Division is required" 
          : value.length < 2 
          ? "Please enter a valid division name" 
          : "";
      case "address":
        return !value.trim() 
          ? "Address is required" 
          : value.length < 5 
          ? "Please enter a complete address" 
          : "";
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
      country: validateField("country", formData.country),
      district: validateField("district", formData.district),
      division: validateField("division", formData.division),
      address: validateField("address", formData.address)
    };

    setErrors(newErrors);

    // Only navigate if there are no errors
    if (Object.values(newErrors).every(error => error === "")) {
      navigate("/PhotographerSignUp4");
    }
  };

  const handlePrevRoutePages = () => {
    navigate("/PhotographerSignUp2");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      country: validateField("country", formData.country),
      district: validateField("district", formData.district),
      division: validateField("division", formData.division),
      address: validateField("address", formData.address)
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
        {/* Image Section */}
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
            Setup your location
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Setup your country, District, Division, Address
          </p>
          <form onSubmit={handleSubmit} className="w-full" noValidate>
            <InputField
              type="text"
              value={formData.country}
              onChange={(e) => handleChange({ target: { name: 'country', value: e.target.value } })}
              onBlur={(e) => handleBlur({ target: { name: 'country', value: e.target.value } })}
              label="Country"
              placeholder="Enter your country"
              error={errors.country}
              name="country"
            />
            <InputField
              type="text"
              value={formData.district}
              onChange={(e) => handleChange({ target: { name: 'district', value: e.target.value } })}
              onBlur={(e) => handleBlur({ target: { name: 'district', value: e.target.value } })}
              label="District"
              placeholder="Enter your district"
              error={errors.district}
              name="district"
            />
            <InputField
              type="text"
              value={formData.division}
              onChange={(e) => handleChange({ target: { name: 'division', value: e.target.value } })}
              onBlur={(e) => handleBlur({ target: { name: 'division', value: e.target.value } })}
              label="Division"
              placeholder="Enter your division"
              error={errors.division}
              name="division"
            />
            <InputField
              type="text"
              value={formData.address}
              onChange={(e) => handleChange({ target: { name: 'address', value: e.target.value } })}
              onBlur={(e) => handleBlur({ target: { name: 'address', value: e.target.value } })}
              label="Address"
              placeholder="Enter your address"
              error={errors.address}
              name="address"
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

export default PhotographerSignUp3;