import React, { useState } from 'react';
import { Search } from 'lucide-react';
import userImg from "../../images/user/user.jpg";
import { FaStar } from "react-icons/fa";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaRegCircleCheck, FaCircleChevronRight } from "react-icons/fa6";
const PhotographerMain = () => {
  // Enhanced photographer data with varied ratings
  const allPhotographers = [
    { id: 1, name: 'Valter Antunes', location: 'Matara, Sri Lanka', rating: 5, username: '@vantunes', image: userImg, reviewCount: 128 },
    { id: 2, name: 'Sarah Chen', location: 'Colombo, Sri Lanka', rating: 4, username: '@schen', image: userImg, reviewCount: 89 },
    { id: 3, name: 'David Kumar', location: 'Kandy, Sri Lanka', rating: 5, username: '@dkumar', image: userImg, reviewCount: 156 },
    { id: 4, name: 'Maria Santos', location: 'Galle, Sri Lanka', rating: 4, username: '@msantos', image: userImg, reviewCount: 67 },
    { id: 5, name: 'John Smith', location: 'Negombo, Sri Lanka', rating: 5, username: '@jsmith', image: userImg, reviewCount: 234 },
    { id: 6, name: 'Priya Patel', location: 'Jaffna, Sri Lanka', rating: 4, username: '@ppatel', image: userImg, reviewCount: 92 },
    { id: 7, name: 'Alex Wong', location: 'Batticaloa, Sri Lanka', rating: 5, username: '@awong', image: userImg, reviewCount: 178 },
    { id: 8, name: 'Lisa Park', location: 'Trincomalee, Sri Lanka', rating: 4, username: '@lpark', image: userImg, reviewCount: 45 },
    { id: 9, name: 'Raj Sharma', location: 'Anuradhapura, Sri Lanka', rating: 5, username: '@rsharma', image: userImg, reviewCount: 167 },
    { id: 10, name: 'Emma Wilson', location: 'Ella, Sri Lanka', rating: 4, username: '@ewilson', image: userImg, reviewCount: 73 },
    { id: 11, name: 'Carlos Rodriguez', location: 'Matara, Sri Lanka', rating: 5, username: '@crodriguez', image: userImg, reviewCount: 145 },
    { id: 12, name: 'Nina Patel', location: 'Kandy, Sri Lanka', rating: 3, username: '@npatel', image: userImg, reviewCount: 34 },
    { id: 13, name: 'Tom Anderson', location: 'Galle, Sri Lanka', rating: 5, username: '@tanderson', image: userImg, reviewCount: 189 },
    { id: 14, name: 'Sophie Kim', location: 'Colombo, Sri Lanka', rating: 4, username: '@skim', image: userImg, reviewCount: 88 },
    { id: 15, name: 'Marco Rivera', location: 'Negombo, Sri Lanka', rating: 5, username: '@mrivera', image: userImg, reviewCount: 198 },
    { id: 16, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 17, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 18, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 19, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 20, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 21, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 22, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 23, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
    { id: 24, name: 'Anna Lee', location: 'Jaffna, Sri Lanka', rating: 3, username: '@alee', image: userImg, reviewCount: 29 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const photographersPerPage = 8;

  // Filter and sort photographers
  const filteredPhotographers = allPhotographers
    .filter(photographer =>
      photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      // Sort by rating first (descending)
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      // If ratings are equal, sort by review count (descending)
      return b.reviewCount - a.reviewCount;
    });

  // Calculate pagination
  const indexOfLastPhotographer = currentPage * photographersPerPage;
  const indexOfFirstPhotographer = indexOfLastPhotographer - photographersPerPage;
  const currentPhotographers = filteredPhotographers.slice(indexOfFirstPhotographer, indexOfLastPhotographer);
  const totalPages = Math.ceil(filteredPhotographers.length / photographersPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 py-8 font-['Poppins']">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#115c86] mb-4 mt-20">
          Capture Moments That Matter
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#115c86] mb-3">
          with the Best Photographers Near You
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            eveniet architecto ut veritatis officia dignissimos atque, omnis
            recusandae excepturi neque soluta non numquam? Aperiam architecto,
            corrupti explicabo eaque nesciunt eum.
          </p>
        
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search photographers"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center">
            <Search className="w-5 h-5" />
            <span className="ml-2">Search</span>
          </button>
        </div>
      </div>

      {/* Photographers Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentPhotographers.map((photographer) => (
          <div key={photographer.id} className="bg-gradient-to-b from-aliceBlue to-blue-200 rounded-[50px] shadow-md p-6 transition-transform hover:scale-105 h-[400px]">
            <div className="flex flex-col items-center  h-full">
              <img
                src={photographer.image}
                alt={photographer.name}
                className="w-34 h-34 rounded-full mb-6 object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#115c86] flex items-center gap-2 justify-center ">
                  {photographer.name}
                  <FaRegCircleCheck className="text-green-600" />
                </h3>
                <p className="text-gray-500 mb-6">{photographer.username}</p>
                <div className="flex items-center gap-2 justify-center mb-6">
                   <PiMapPinAreaBold />
                  <span className="text-gray-600">{photographer.location}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex justify-center gap-1">
                    {[...Array(photographer.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{photographer.reviewCount} reviews</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <button 
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className="px-3 py-1 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 rounded-lg ${
                number === currentPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              {number}
            </button>
          ))}
          <button 
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
            className="px-3 py-1 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotographerMain;