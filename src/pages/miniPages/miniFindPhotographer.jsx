import React from "react";
import { FaSearch } from "react-icons/fa";

import Button from "../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

import locationImg from "../../images/others/map.jpg";

const LocationSearch = () => {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate("/photographers");
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#E8EFF7] px-10 py-6">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={locationImg} alt="Location Pin" className="w-full h-auto" />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-right">
        <h1 className="text-5xl md:text-[75px] leading-tight font-extrabold text-[#115c86] font-[Poppins]">
          Find the Best <br /> Photographers <br /> Near Me
        </h1>

        {/* Description */}
        <p className="text-base text-gray-600 mt-4 mb-5 font-[Poppins] leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto nulla vitae perspiciatis natus sint atque, eaque ea
          aliquid maiores doloribus laudantium a. Nostrum quam, quisquam
          quibusdam optio numquam asperiores autem.
        </p>

        {/* Search Bar */}

        <div className="w-[150px] mt-5 mx-auto md:ml-auto md:mr-0 xl:mr-50 m-auto">
          <Button
            name="Search.."
            icon={<FaSearch />}
            bgColor="#0057ff"
            width="250px"
            borderColor="#0057ff"
            iconBgColor=""
            borderRadius="20px"
            fontWeight="600"
            fontSize="20px"
            onClick={handlePrevPage}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationSearch;
