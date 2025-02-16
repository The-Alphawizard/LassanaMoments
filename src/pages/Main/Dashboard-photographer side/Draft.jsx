import React, { useState } from "react";
import {
  MoreVertical,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
  Plus
} from "lucide-react";

const Draft = () => {
  const initialPhotos = Array(6).fill({
    image: "/src/assets/Photographer Dashboard(User Side) Images/1.jpg",
    title: "Model Photography",
    username: "@maalgamage",
    likes: 100000,
    isLiked: false
  });

  const [photos, setPhotos] = useState(initialPhotos);

  // Function to handle like button click
  const handleLike = (index) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo, i) =>
        i === index
          ? {
              ...photo,
              isLiked: !photo.isLiked,
              likes: photo.isLiked ? photo.likes - 1 : photo.likes + 1
            }
          : photo
      )
    );
  };

  return (
    <div className="p-4 md:p-6">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Navigation Buttons */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-8 sm:h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft size={18} />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-8 sm:h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={18} />
            </button>

            {/* More Options Button */}
            <button className="absolute top-3 right-3 p-2 sm:p-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical size={18} />
            </button>

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white font-medium text-lg sm:text-base">
                {photo.title}
              </h3>
              <p className="text-white/80 text-sm">{photo.username}</p>
              <div className="flex gap-4 mt-2">
                {/* Like Button */}
                <button
                  className="flex items-center gap-1.5 text-white text-sm"
                  onClick={() => handleLike(i)}
                >
                  <Heart
                    size={16}
                    className={`${
                      photo.isLiked ? "fill-red-500 text-red-500" : "fill-white"
                    } transition-all duration-300`}
                  />
                  <span className="font-medium">{photo.likes}</span>
                </button>
                {/* Views Count */}
                <span className="flex items-center gap-1.5 text-white text-sm">
                  <Eye size={16} />
                  <span className="font-medium">100k</span>
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Create Album Section */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <Plus size={32} />
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Create Album
          </button>
          <p className="text-gray-500 text-sm mt-2">Create your album here</p>
        </div>
      </div>
    </div>
  );
};

export default Draft;
