import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Storytelling from "./components/Storytelling";
import Bestie from "./components/Bestie";
import Classic from "./components/Classic";

function App() {
  const [isVintage, setIsVintage] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "vintage";
  });

  const toggleTheme = () => {
    setIsVintage((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "vintage" : "modern");
      return newTheme;
    });
  };

  return (
    <div className={isVintage ? "theme-vintage" : ""}>
      {/* container applying CSS vars for background and text */}
      <div className="app-root h-screen transition-colors duration-500 ease-in-out">
        {/* Navbar component */}
        <Navbar isVintage={isVintage} toggleTheme={toggleTheme} />
        {/* other components and content */}
        <Header />
        <Storytelling />
        <Bestie />
        <Classic />
      </div>
    </div>
  );
}

export default App;
