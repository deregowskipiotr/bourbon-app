import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isVintage, setIsVintage] = useState(false);

  useEffect(() => {
    if (isVintage) {
      document.body.classList.add("theme-vintage");
    } else {
      document.body.classList.remove("theme-vintage");
    }
  }, [isVintage]);

  return (
    <button
      type="button"
      className="glassmorphic px-4 py-2"
      onClick={() => setIsVintage(!isVintage)}
      aria-label="Toggle theme"
    >
      {isVintage ? "Dark Neon Mode" : "Vintage Mode"}
    </button>
  );
}
