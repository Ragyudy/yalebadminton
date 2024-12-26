import { useState, useEffect } from "react";
import { MoonStar, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve the theme preference from local storage or default to dark
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark mode
  });

  const handleToggle = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the new theme preference to local storage
      localStorage.setItem("theme", newMode ? "dark" : "light");
      // Apply the theme to the body
      document.body.className = newMode ? "dark-mode" : "light-mode";
      return newMode;
    });
  };

  useEffect(() => {
    // Initialize the body class based on the stored preference or default
    const savedTheme = localStorage.getItem("theme");
    document.body.className =
      savedTheme === "dark" || !savedTheme ? "dark-mode" : "light-mode";
  }, []); // Run only once on component mount

  return (
    <div className="theme-toggle">
      <label className="toggle-label">
        <input
          type="checkbox"
          className="toggle-input"
          onChange={handleToggle}
          checked={isDarkMode}
        />
        <div className="toggle-slider">
          {isDarkMode ? (
            <MoonStar className="toggle-icon" />
          ) : (
            <Sun className="toggle-icon" />
          )}
        </div>
      </label>
    </div>
  );
}
