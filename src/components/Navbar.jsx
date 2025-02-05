import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoSearch,
  IoMoonOutline,
  IoSunnyOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Photographers", href: "#" },
  ];

  const SearchBar = ({ mobile = false }) => (
    <div
      className={`
      ${mobile ? "md:hidden" : "hidden md:flex"} 
      items-center 
      ${
        mobile
          ? "fixed top-0 left-0 w-full p-4 bg-white z-50"
          : "w-[25%] py-2 px-2 shadow-lg rounded-2xl"
      }
    `}
    >
      <motion.div
        className="flex items-center w-full"
        initial={mobile ? { opacity: 0, y: -50 } : {}}
        animate={mobile ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
      >
        <IoSearch className="text-2xl mr-2" />
        <input
          type="text"
          className="w-full bg-transparent focus:outline-none"
          placeholder="Search here..."
        />
        {mobile && (
          <motion.button onClick={toggleMobileSearch} whileTap={{ scale: 0.8 }}>
            <FaTimes className="text-2xl" />
          </motion.button>
        )}
      </motion.div>
    </div>
  );

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:grid md:grid-cols-1 lg:flex lg:items-center lg:justify-between px-8 pt-8 pb-5 xl:gap-15 md:gap-5">
        {/* Logo Name */}
        <div className="px-2">
          <h1 className="text-2xl font-bold lg:text-[20px] xl:text-2xl">
            LassanaMoments
          </h1>
        </div>

        {/* Second Column - Moves to Second Row in md */}
        <div className=" md:grid-cols-1 lg:flex lg:w-full md:flex items-center justify-between py-3">
          {/* Nav Links */}
          <div className="flex items-center justify-center xl:ml-20">
            <ul className="flex items-center w-full gap-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer font-bold lg:text-[15px] xl:text-xl text-center"
                >
                  {link.name}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Search Bar */}
          <SearchBar />

          {/* Other Buttons */}
          <div className="flex items-center gap-4 ">
            <motion.button
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.8 }}
              className="text-2xl"
            >
              {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
            </motion.button>

            <motion.button whileTap={{ scale: 0.8 }} className="text-2xl">
              <IoNotificationsOutline />
            </motion.button>

            <Button
              name="Join us"
              bgColor="#0057ff"
              borderColor="#0057ff"
              iconBgColor="white"
              borderRadius="10px"
            />

            <motion.button whileTap={{ scale: 0.8 }} className="text-xl">
              <BsThreeDotsVertical />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">LassanaMoments</h1>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleMobileSearch}
              whileTap={{ scale: 0.8 }}
            >
              <IoSearch className="text-2xl" />
            </motion.button>

            <motion.button onClick={toggleMobileMenu} whileTap={{ scale: 0.8 }}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {isMobileSearchOpen && <SearchBar mobile />}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 mt-15 bg-white  shadow-lg z-40 p-6 overflow-y-auto"
            >
              {/* Mobile Menu Content */}
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-lg"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="flex items-center space-x-4 mt-4">
                  <motion.button
                    onClick={toggleDarkMode}
                    whileTap={{ scale: 0.8 }}
                    className="text-2xl"
                  >
                    {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                  </motion.button>

                  <motion.button whileTap={{ scale: 0.8 }} className="text-2xl">
                    <IoNotificationsOutline />
                  </motion.button>
                </div>
                <div>
                  <Button
                    name="Join us"
                    bgColor="#0057ff"
                    borderColor="#0057ff"
                    iconBgColor="white"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
