import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    profileImage: null,
    isAuthenticated: false
  });

  const updateUserDetails = (details) => {
    setUserDetails(prev => ({
      ...prev,
      ...details
    }));
  };

  const clearUserDetails = () => {
    setUserDetails({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      profileImage: null,
      isAuthenticated: false
    });
  };

  return (
    <UserContext.Provider value={{ 
      userDetails, 
      updateUserDetails,
      clearUserDetails
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;