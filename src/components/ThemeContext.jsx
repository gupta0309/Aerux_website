

import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Local storage में सेव करें
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]); 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};