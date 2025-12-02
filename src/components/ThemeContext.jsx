// ThemeContext.js

import React, { createContext, useState, useEffect } from 'react';

// 1. Context ऑब्जेक्ट्स बनाएं
export const ThemeContext = createContext();

// 2. Context Provider Component बनाएं
export const ThemeProvider = ({ children }) => {
  // initial theme, local storage से check करें
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  // 3. Theme को toggle करने का function
  const toggleTheme = () => {
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Local storage में सेव करें
      return newTheme;
    });
  };

  // 4. Component Mount होने पर theme class को body tag पर apply करें
  useEffect(() => {
    document.body.className = theme;
  }, [theme]); // theme state change होने पर फिर से run होगा

  // 5. Value provider से export करें
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};