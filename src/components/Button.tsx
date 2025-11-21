import { useState, useCallback } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative overflow-hidden rounded-md border border-(--primary-color)/60
        bg-transparent text-(--bg-color) font-semibold tracking-wide px-10 py-3
        cursor-pointer select-none transition-colors duration-1200 ease-in-out
        w-[330px] md:w-auto
        ${hovered ? "text-(--primary-color)" : "text-(--bg-color)"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      style={{ willChange: "transform, opacity" }}
      //aria-disabled={disabled}
    >
      {/* Background Glow Sweep */}
      <span
        aria-hidden="true"
        className={`
          absolute inset-0 -left-full bg-linear-to-r from-transparent via-(--primary-color-glow) to-transparent
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
