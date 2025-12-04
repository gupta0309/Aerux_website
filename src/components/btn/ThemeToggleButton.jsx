import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "../../css/toggle.css";

import moonIcon from "../../assets/toggle/2.jpg";
import sunIcon from "../../assets/toggle/1.png";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`toggle-switch-box ${theme === "light" ? "light-mode" : "dark-mode"}`}
      onClick={toggleTheme}
    >
      <div
        className="toggle-switch-knob"
        style={{
          backgroundImage: `url(${theme === "light" ? sunIcon : moonIcon})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default ThemeToggleButton;

