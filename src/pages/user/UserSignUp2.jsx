import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import shieldLogo from "./../../assets/User SignUp Images/shield.png";
import CircleCheck from "./../../assets/User SignUp Images/check.png";
import { useUser } from '../../context/UserContext';


const UserSignUp2 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const { updateUserDetails } = useUser();

  const handleNextRoutePages = () => {
    if (!username.trim()) {
      setError("Username is required");
      setTouched(true);
      return;
    }
    navigate("/UserSignUp1");
  };

  const handlePrevRoutePages = () => {
    if (!username.trim()) {
      setError("Username is required");
      setTouched(true);
      return;
    }
    if (!isValid) {
      setError("Please enter a valid username");
      return;
    }
    updateUserDetails({ username });
    navigate("/UserSignUp3");
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setTouched(true);

    if (!value.trim()) {
      setError("Username is required");
      setIsValid(false);
    } else if (value.length < 3) {
      setError("Username must be at least 3 characters long");
      setIsValid(false);
    } else {
      setError("");
      setIsValid(true);
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
        <div className="flex flex-col items-center">
          <img src={shieldLogo} alt="Shield Logo" className="w-40 h-40 mb-6" />

          <div className="relative w-full mb-8">
            <input
              type="text"
              placeholder="@eventz/username"
              value={username}
              onChange={handleUsernameChange}
              onBlur={() => setTouched(true)}
              required
              className={`w-full py-3 pl-4 pr-10 border rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                touched && error
                  ? "border-red-500"
                  : isValid
                  ? "border-green-500"
                  : ""
              }`}
            />
            {isValid && (
              <img
                src={CircleCheck}
                alt="Check Icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6"
              />
            )}
            {touched && error && (
              <p className="text-red-500 text-sm mt-1 ml-4">{error}</p>
            )}
          </div>

          <div className="flex gap-2 mb-3 justify-center items-center">
            <div className="rounded-full bg-[#FFA200FF] w-2 h-2 shadow-lg"></div>
            <div className="rounded-full bg-[var(--color-primaryText)] w-2 h-2 shadow-lg"></div>
            <div className="rounded-full bg-[var(--color-primaryText)] w-2 h-2 shadow-lg"></div>
          </div>

          <h2
            className="text-lg font-semibold mb-2"
            style={{ color: "var(--color-primaryText)" }}
          >
            Create your username
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
              disabled={!isValid}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp2;
