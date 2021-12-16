import React, { useEffect, useState } from 'react';

export const DarkModeContext = React.createContext({
  isDarkMode: false,
  toggle: () => {},
});

export const DarkModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem('darkMode') || 'false')
  );

  const toggle = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
