import React, { useState, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import {
  highlightImages,
  allImages,
  babyShootsImages,
  modelShootsImages,
  preShootsImages,
  weddingImages,
  eventImages
} from "./ImageImports";

const Gallery = () => {
  const [activePage, setActivePage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (!["Baby Shoots", "Model Shoots", "Pre Shoots", "Weddings", "Events"].includes(category)) {
      setActivePage(1);
    }
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft" && selectedCategory) {
        handleBackClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCategory]);

  const imagesToDisplay =
    selectedCategory === "Baby Shoots"
      ? babyShootsImages
      : selectedCategory === "Model Shoots"
      ? modelShootsImages
      : selectedCategory === "Pre Shoots"
      ? preShootsImages
      : selectedCategory === "Weddings"
      ? weddingImages
      : selectedCategory === "Events"
      ? eventImages
      : allImages[activePage - 1];

  return (
    <div className="bg-[#E7EFFC] p-5 md:p-8">
      <h2 className="text-4xl md:text-6xl font-bold text-[#213653] mt-12 text-center">Visual Stories</h2>
      <h2 className="text-4xl md:text-6xl font-bold text-[#213653] mb-2  text-center">A Gallery of Photography</h2>
      <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base mb-8">
        See amazing moments captured through beautiful lenses. Browse through various categories like model shoots, baby shoots, weddings, and more.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 my-8 md:my-12">
        {highlightImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Highlight ${index + 1}`}
            className={`w-48 h-64 object-cover rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl
              ${(index === 0 || index === 3) ? 'md:translate-y-10' : ''}`}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-8 mt-16 mb-8">
        {["Baby Shoots", "Model Shoots", "Pre Shoots", "Weddings", "Events"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="px-6 py-3 bg-[#D4DBED] text-[#1F3655] rounded-lg text-sm md:text-base 
                     transition-colors duration-300 hover:bg-[#b0c0e0]"
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="flex justify-start">
          <button
            className="px-4 py-2 bg-[#D4DBED] text-[#1F3655] rounded-md 
                     transition-colors duration-300 hover:bg-[#b0c0e0]"
            onClick={handleBackClick}
          >
            ←
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4 md:m-6">
        {imagesToDisplay.map((src, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden relative 
                     transition-all duration-300 hover:scale-102 hover:shadow-lg
                     w-full max-w-xs h-[350px] mx-auto"
          >
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 w-full p-5 bg-black/60 text-white opacity-0 
                           hover:opacity-100 transition-opacity duration-300 rounded-b-2xl">
                <h4 className="text-lg font-semibold mb-1">Lorem Ipsum</h4>
                <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <button className="absolute top-3 right-4 text-black/70">
                <MoreVertical size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {!["Baby Shoots", "Model Shoots", "Pre Shoots", "Weddings", "Events"].includes(
        selectedCategory
      ) && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setActivePage(activePage > 1 ? activePage - 1 : 1)}
            className="text-2xl text-black hover:text-gray-600 transition-colors duration-300"
          >
            &lt;
          </button>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <button
              key={num}
              className={`text-xl hover:text-gray-600 transition-colors duration-300
                       ${activePage === num ? 'font-bold underline' : ''}`}
              onClick={() => setActivePage(num)}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setActivePage(activePage < 8 ? activePage + 1 : 8)}
            className="text-2xl text-black hover:text-gray-600 transition-colors duration-300"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;