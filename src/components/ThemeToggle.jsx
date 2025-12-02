// ThemeToggle.js

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Button पर icon या text theme के अनुसार बदलें
  const buttonText = theme === 'light' ? 'Switch to Dark Mode 🌙' : 'Switch to Light Mode ☀️';

  return (
    <button
      onClick={toggleTheme}
      // आप यहाँ CSS classes apply कर सकते हैं
      style={{
        padding: '10px',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? '#333' : '#f0f0f0',
        color: theme === 'light' ? 'white' : 'black',
        border: 'none',
        borderRadius: '5px'
      }}
    >
      {buttonText}
    </button>
  );
}

export default ThemeToggle;