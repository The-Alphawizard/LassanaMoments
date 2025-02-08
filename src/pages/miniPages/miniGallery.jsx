import React from "react";

import Button from "../../components/Button";
import { useNavigate, useLocation } from "react-router-dom";

const miniGallery = () => {
  const navigate = useNavigate();

  const handlePrevPage = () => {
    navigate("/gallery");
  };
  return (
    <div>
      <div
        id="gallery"
        className="w-full h-screen bg-red-400 flex-col flex  items-center justify-center"
      >
        <h1 className="text-6xl font-bold text-aliceBlue mb-7">Gallery</h1>
<div>

        <Button
        onClick={handlePrevPage}
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
      </div>
    </div>
  );
};

export default miniGallery;
