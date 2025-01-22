import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of the user data
interface User {
  name: string;
  email: string;
  // Add other user properties as needed
}

// Create a context with a default value
const UserContext = createContext<User | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const default:User  User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add other default user properties here
  };

  return (
    <User Context.Provider value={defaultUser }>
      {children}
    </User Context.Provider>
  );
};

// Create a custom hook to use the UserContext
export const useUser  = (): User => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser  must be used within a UserProvider');
  }
  return context;
};