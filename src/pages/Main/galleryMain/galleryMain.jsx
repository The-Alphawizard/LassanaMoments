import React, { useState, useEffect } from "react";
import { MoreVertical } from "lucide-react";

const Gallery = () => {
  const [activePage, setActivePage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  
  const ITEMS_PER_PAGE = 8;

  // Create pages of all images
  const allImagesFlat = Array.from({ length: 16 }, (_, i) => 
    i % 2 === 0 ? "https://www.stylecraze.com/wp-content/uploads/2013/05/Most-Beautiful-Women-In-India_1200px.jpg.webp" : "https://www.stylecraze.com/wp-content/uploads/2013/05/Most-Beautiful-Women-In-India_1200px.jpg.webp"
  );
  
  const totalPages = Math.ceil(allImagesFlat.length / ITEMS_PER_PAGE);
  
  const getCurrentPageImages = () => {
    const start = (activePage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return allImagesFlat.slice(start, end);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActivePage(1);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setActivePage(1);
  };

  const handleImageClick = (src) => {
    setActiveImage(src);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      } else if (event.key === "ArrowLeft" && selectedCategory) {
        handleBackClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCategory]);

  const getCategoryImages = () => {
    switch (selectedCategory) {
      case "Baby Shoots":
        return Array(10).fill("https://www.stylecraze.com/wp-content/uploads/2013/05/Most-Beautiful-Women-In-India_1200px.jpg.webp");
      case "Model Shoots":
        return Array(8).fill("https://static.vecteezy.com/system/resources/previews/026/603/583/non_2x/beautiful-girl-with-autumn-leaves-free-photo.jpg");
      case "Pre Shoots":
        return Array(9).fill("https://photosnow.org/wp-content/uploads/2024/04/indian-girl-photo_3.jpg");
      case "Weddings":
        return Array(7).fill("https://mastdp.com/img/beautiful-girl/beautiful-girl-wallpaper-download.webp");
      case "Events":
        return Array(9).fill("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-JOuwZROJiHaKZFPDhiy7nXnfPVYPZC0hw&s");
      default:
        return getCurrentPageImages();
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-12 text-center">
          Visual Stories
        </h2>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 text-center">
          A Gallery of Photography
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base mb-8 text-center">
          See amazing moments captured through beautiful lenses. Browse through various 
          categories like model shoots, baby shoots, weddings, and more.
        </p>

        {/* Highlight Images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 my-8 md:my-12">
          {Array(4).fill("https://wallpapers4screen.com/Uploads/25-10-2023/61762/thumb2-ana-de-armas-4k-portrait-american-celebrity-movie-stars.jpg").map((img, index) => (
            <div
              key={index}
              className={`w-48 h-64 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl
                ${(index === 0 || index === 3) ? 'md:translate-y-10' : ''}`}
            >
              <img
                src={img}
                alt={`Highlight ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-8 mt-16 mb-8">
          {["Baby Shoots", "Model Shoots", "Pre Shoots", "Weddings", "Events"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-3 rounded-lg text-sm md:text-base transition-all duration-300
                ${selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Back Button */}
        {selectedCategory && (
          <div className="flex justify-start mb-4">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md 
                       transition-colors duration-300 hover:bg-gray-300"
              onClick={handleBackClick}
            >
              ← Back
            </button>
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getCategoryImages().map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden relative 
                       transition-all duration-300 hover:scale-105 hover:shadow-lg
                       group cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={src}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 text-white opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300
                             flex flex-col justify-end p-5">
                  <h4 className="text-lg font-semibold mb-1">Photo Title</h4>
                  <p className="text-sm">Beautiful capture of a special moment.</p>
                </div>
                <button 
                  className="absolute top-3 right-4 text-white opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add your menu handling logic here
                  }}
                >
                  <MoreVertical size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {!selectedCategory && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setActivePage(Math.max(1, activePage - 1))}
              className="text-2xl text-gray-700 hover:text-gray-900 
                       disabled:text-gray-400 disabled:cursor-not-allowed"
              disabled={activePage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                className={`text-xl transition-colors duration-300
                         ${activePage === num 
                           ? 'font-bold text-blue-600 underline' 
                           : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => setActivePage(num)}
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => setActivePage(Math.min(totalPages, activePage + 1))}
              className="text-2xl text-gray-700 hover:text-gray-900
                       disabled:text-gray-400 disabled:cursor-not-allowed"
              disabled={activePage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}

        {/* Lightbox */}
        {activeImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              alt="Selected image"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;