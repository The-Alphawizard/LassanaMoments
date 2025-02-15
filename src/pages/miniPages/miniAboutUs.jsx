import { motion } from 'framer-motion';
import bg from "./../../images/AboutUs/1.jpeg";
//transparent
import logo from "./../../images/AboutUs/LassanaMomentz logo transparent.png";

const AboutUs = () => {
  return (
    <div 
      className="min-h-screen font-primary text-primaryText overflow-hidden" 
      style={{ fontFamily: "var(--font-primary)" }}
    >
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden w-full">
        {/* Background Image with Zoom-Out Animation */}
        <motion.div
          initial={{ scale: 1.2, rotate: 5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={bg}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay with Animated Glare Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-periwinkleBlue/30 via-aliceBlue/90 to-lightPowderBlue/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Glare Effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white/10 transform -rotate-45 translate-x-full"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center w-full p-6 sm:p-12">
          <div className="container mx-auto px-4 text-center space-y-8 max-w-4xl w-full">
            {/* Logo Animation */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={logo}
              alt="Logo"
              className="w-28 sm:w-36 md:w-48 mx-auto drop-shadow-2xl"
            />
            
            {/* Title Animation with Gradient Text */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#304489] to-[#281e94] drop-shadow-lg"
            >
              LASSANAMOMENTS
            </motion.h1>
            
            {/* Subtitle Animation */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-[#7f8598] leading-relaxed mx-auto tracking-wide"
            >
              At LassanaMoments, we specialize in creating unforgettable memories through expert photography services tailored for all your events. Whether it’s a wedding, corporate gathering, birthday celebration, or any special occasion, we bring your moments to life with precision, creativity, and passion.
            </motion.p>
            
            {/* Buttons with Hover/Tap Animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center items-center"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "var(--color-primaryBlue)",
                  fontFamily: "Transcity, sans-serif",
                }}
                className="text-white w-60 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-blue-600 transition-all shadow-lg sm:w-70"
              >
                Explore Our Work
              </motion.button>
              
              {/* Secondary Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primaryBlue text-primaryBlue px-6 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-primaryBlue hover:text-white transition-all w-60 sm:w-70"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;