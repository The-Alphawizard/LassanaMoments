import React, { useState } from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

import {  FaCircleChevronRight } from "react-icons/fa6";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Using placeholder images instead of imports
  const categories = [
    {
      title: "Baby Shoots",
      image: "https://cdn.shopify.com/s/files/1/0678/3667/4345/files/baby_christmas_photoshoot_santa_hat_600x600.jpg?v=1669373160",
    },
    {
      title: "Model Shoots",
      image: "https://t4.ftcdn.net/jpg/04/07/85/11/360_F_407851117_DLGxS3pJqUC2bJSOXXphJlsx73eVP9xT.jpg",
    },
    {
      title: "Pre Shoots",
      image: "https://weddingdiariesbyomp.com/wp-content/uploads/Prewedding-Shoot-in-Goa-1-1.webp",
    },
    {
      title: "Weddings",
      image: "https://labellecouture.com.sg/wp-content/uploads/2023/02/pre-wedding-photoshoot-ideas-2023-1440x960.jpg",
    },
    {
      title: "Events",
      image: "https://cdn.shopify.com/s/files/1/2572/3764/files/Find_a_Great_Place_for_the_Event_1024x1024.jpg?v=1627545662",
    },
    {
      title: "Maternity Shoots",
      image: "https://d21qxd5qkegi1o.cloudfront.net/wp-content/uploads/2021/03/amy_2021_03-san-francisco-dreamy-outdoor-maternity-photos-05.jpg",
    },
    {
      title: "Graduation Shoots",
      image: "https://images.squarespace-cdn.com/content/v1/543add74e4b0bb6f0dc55f47/1556079279389-E1TQRAAD696ON2AFHW4B/0312-Bryan+Miraflor+Photography-Graduation+Photoshoot-0103.jpg",
    },
    
    {
      title: "Family Portraits",
      image: "https://media.flytographer.com/uploads/2022/08/family-photo-ideas-flytographer-15.jpg",
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsFullScreen(true);
  };

  // const closeFullScreen = () => {
  //   setIsFullScreen(false);
  //   setSelectedCategory(null);
  // };
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate("/gallery");
  };


  return (
    <div id="gallery" className=" font-['Poppins'] p-5 mt- ">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-[#115c86] text-8xl mb-6 md:text-6xl sm:text-5xl mt-20 font-semibold">
          Gallery
        </h2>
        <p className="text-lg text-[#213653] leading-relaxed mb-12 md:text-base sm:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-2.5 justify-center max-w-[1200px] mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[350px] aspect-[4/3] justify-self-center"
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover block transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5 text-white text-center text-xl font-bold">
                {category.title}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
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

        {/* {isFullScreen && selectedCategory && (
          <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
            <button
              className="absolute top-0 right-5 text-6xl text-white hover:text-red-500 transition-colors duration-300 md:text-4xl sm:text-2xl sm:right-2.5 sm:top-2.5"
              onClick={closeFullScreen}
            >
              &times;
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-white mb-5 text-center md:text-3xl sm:text-2xl">
                {selectedCategory.title}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full h-full p-5 overflow-y-auto">
                {selectedCategory.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedCategory.title} ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Gallery;
