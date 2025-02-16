import React from "react";
import { MoreVertical, PenLine } from "lucide-react";

export const Reviews = () => {
  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      {/* Write Review Button */}
      <div className="flex justify-end mb-4 sm:mb-6">
        <button className="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-full font-medium flex items-center gap-2 text-sm sm:text-base">
          <PenLine size={18} sm:size={20} />
          Write Review
        </button>
      </div>

      {/* Grid layout for reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="p-4 sm:p-6 bg-blue-50 rounded-xl shadow-md">
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-center">
                <img
                  src="/src/assets/Photographer Dashboard(User Side) Images/men.jpg"
                  alt="Reviewer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-sm sm:text-base">
                    Adam Eddrian
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">1 hour ago</p>
                </div>
              </div>
              <button className="p-1">
                <MoreVertical size={18} sm:size={20} />
              </button>
            </div>

            {/* Star Ratings */}
            <div className="flex gap-1 my-2 sm:my-3">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We are so grateful for the incredible wedding photos you captured!
              📸 Every moment feels alive in the pictures, and we can't stop
              looking at them. Thank you for making our day so memorable! ❤️✨
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
