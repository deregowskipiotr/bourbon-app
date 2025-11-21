import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function NeonUnderlineButton({ children, ...props }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      {...props}
      aria-pressed={hovered ? "true" : "false"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative overflow-hidden rounded-md border border-(--primary-color)
        bg-transparent text-(--bg-color) font-semibold tracking-wide px-8 py-3
        cursor-pointer select-none transition-colors duration-300 shadow-inner
        ${
          hovered
            ? "text-(--primary-color) scale-[1.03]"
            : "text-(--bg-color) scale-100"
        }
        transform
      `}
    >
      {/* Layered Glow Sweep */}
      <span
        aria-hidden="true"
        className={`
          absolute inset-0 left-[-110%] bg-gradient-to-r 
          from-transparent via-[rgba(200,145,51,0.45)] to-transparent
          transition-transform duration-1500 ease-in-out
          ${hovered ? "translate-x-[125%]" : "translate-x-0"}
          pointer-events-none z-0
          filter drop-shadow-[0_0_15px_rgba(200,145,51,0.7)]
          rounded-md
        `}
      />
      <span
        aria-hidden="true"
        className={`
          absolute inset-0 left-[-90%] bg-gradient-to-r
          from-transparent via-[rgba(255,255,255,0.15)] to-transparent
          transition-transform duration-1500 ease-in-out delay-200
          ${hovered ? "translate-x-[115%]" : "translate-x-0"}
          pointer-events-none z-10 rounded-md
        `}
      />

      {/* Button Text */}
      <span className="relative z-20">{children}</span>
    </button>
  );
}
