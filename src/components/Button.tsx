import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
  relative overflow-hidden rounded-md border border-(--primary-color)/60
  bg-transparent text-(--bg-color) font-semibold tracking-wide px-10 py-3
  cursor-pointer select-none transition-colors duration-1200 ease-in-out
  w-[330px] md:w-auto

  ${hovered ? "text-(--primary-color)" : "text-(--bg-color)"}
`}
    >
      {/* Background Glow Sweep */}
      <span
        aria-hidden="true"
        className={`
        absolute inset-0 left-[-100%] bg-gradient-to-r from-transparent via-(--primary-color-glow) to-transparent
        transition-transform duration-1200 ease-in-out
        ${hovered ? "translate-x-full" : "translate-x-0"}
        pointer-events-none
        z-0
      `}
      />

      {/* Button Text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
