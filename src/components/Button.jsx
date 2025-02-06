import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  name, 
  icon, 
  bgColor, 
  borderColor, 
  iconBgColor, 
  borderRadius,
  onClick 
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ 
        scale: 0.95, 
        transition: { duration: 0.1 } 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`flex items-center justify-center px-10 p-0.5 border cursor-pointer text-white font-bold xl:text-xl lg:text-[20px] md:text-[20px]`} 
      style={{ 
        backgroundColor: bgColor, 
        borderColor: borderColor, 
        borderWidth: '2px', 
        borderRadius: borderRadius 
      }}
    >
      {name}
      {icon && (
        <motion.span 
          whileTap={{ rotate: 15 }}
          className="p-2 rounded-full ml-2"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;