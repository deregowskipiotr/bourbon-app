import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

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
      <div className="app-root min-h-screen transition-colors duration-500 ease-in-out">
        {/* Navbar component */}
        <Navbar isVintage={isVintage} toggleTheme={toggleTheme} />
        {/* other components and content */}
        <Header />
      </div>
    </div>
  );
}

export default App;
