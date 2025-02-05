import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  name, 
  icon, 
  bgColor, 
  borderColor, 
  iconBgColor, 
  borderRadius 
}) => {
  return (
    <motion.button
      whileTap={{ 
        scale: 0.95, 
        transition: { duration: 0.1 } 
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`flex items-center px-10 p-0.5 border cursor-pointer text-white font-bold xl:text-xl lg:text-[12px] md:text-[12px]`} 
      style={{ 
        backgroundColor: bgColor, 
        borderColor: borderColor, 
        borderWidth: '2px', 
        borderRadius: borderRadius 
      }}
    >
      {icon && (
        <motion.span 
          whileTap={{ rotate: 15 }}
          className="p-2 rounded-full mr-2"
          style={{ backgroundColor: iconBgColor }}
        >
          {icon}
        </motion.span>
      )}
      {name}
    </motion.button>
  );
};

export default Button;