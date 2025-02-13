import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaRegCircleCheck, FaCircleChevronRight } from "react-icons/fa6";
import Button from "../../components/Button";
import userImg from "../../images/user/user.jpg";

const PhotographerCard = ({
  name,
  location,
  rating,
  verified,
  username,
  image,
}) => (
  <div className="font-['Poppins'] rounded-[35px] p-6 shadow-sm hover:shadow-md transition-shadow w-[240px] h-[350px] bg-gradient-to-b from-aliceBlue to-blue-200">
    <div className="flex flex-col items-center space-y-2  h-full">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100">
        <img
          src={image || "/api/placeholder/128/128"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center space-x-1">
        <span className="font-medium text-[#115c86]">{name}</span>
        {verified && <FaRegCircleCheck className="text-green-600" />}
      </div>
      <div className="text-sm text-gray-500">@{username}</div>
      <div className="flex items-center space-x-1 text-sm text-gray-800 font-medium">
        <PiMapPinAreaBold />
        <span>{location}</span>
      </div>
      <div className="flex space-x-1 mt-10">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
    </div>
  </div>
);

const MiniPhotographer = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const allPhotographers = [
    {
      name: "Valter Antunes",
      location: "Matara, Sri Lanka",
      rating: 5,
      verified: true,
      username: "vantunes",
      image: userImg,
    },
    {
      name: "Sarah Chen",
      location: "Vancouver, Canada",
      rating: 5,
      verified: true,
      username: "schen",
      image: userImg,
    },
    {
      name: "Marco Silva",
      location: "Porto, Portugal",
      rating: 6,
      verified: true,
      username: "msilva",
      image: userImg,
    },
    {
      name: "Emma Wilson",
      location: "Sydney, Australia",
      rating: 5,
      verified: true,
      username: "ewilson",
      image: userImg,
    },
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      rating: 5,
      verified: true,
      username: "rpatel",
      image: userImg,
    },
    {
      name: "Sofia Garcia",
      location: "Barcelona, Spain",
      rating: 5,
      verified: true,
      username: "sgarcia",
      image: userImg,
    },
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allPhotographers.length));
  };

  const handleSeeMore = () => {
    navigate("/photographers");
  };

  return (
    <div  id="miniPhotographer" className="min-h-screen font-['Poppins']">
      <header className=" py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-[#115c86] mt-15">
            Capture Moments That Matter
          </h1>
          <h1 className="text-4xl font-bold text-center mb-4 text-[#115c86]">
            With The Best Photographers Near You
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            eveniet architecto ut veritatis officia dignissimos atque, omnis
            recusandae excepturi neque soluta non numquam? Aperiam architecto,
            corrupti explicabo eaque nesciunt eum.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-20 place-items-center ">
            {allPhotographers
              .slice(0, visibleCount)
              .map((photographer, index) => (
                <PhotographerCard key={index} {...photographer} />
              ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Button
            name="See more"
            icon={<FaCircleChevronRight />}
            bgColor="#0057ff"
            width="250px"
            borderColor="#0057ff"
            iconBgColor=""
            borderRadius="20px"
            onClick={handleSeeMore}
          />
        </div>
      </main>
    </div>
  );
};

export default MiniPhotographer;
