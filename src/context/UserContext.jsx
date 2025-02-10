import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    profileImage: null,
    isAuthenticated: false,
    userType: '', // 'user' or 'photographer'
    // Photographer specific fields
    about: '',
    phone: '',
    country: '',
    district: '',
    division: '',
    address: '',
  });

  const updateUserDetails = (details) => {
    setUserDetails(prev => ({
      ...prev,
      ...details
    }));
  };

  // Specific method for updating photographer details
  const updatePhotographerDetails = (photographerData) => {
    setUserDetails(prev => ({
      ...prev,
      ...photographerData,
      userType: 'photographer',
      isAuthenticated: true // Set to true when photographer signup is complete
    }));
  };

  const clearUserDetails = () => {
    setUserDetails({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      profileImage: null,
      isAuthenticated: false,
      userType: '',
      about: '',
      phone: '',
      country: '',
      district: '',
      division: '',
      address: '',
    });
  };

  return (
    <UserContext.Provider value={{ 
      userDetails, 
      updateUserDetails,
      updatePhotographerDetails,
      clearUserDetails
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;