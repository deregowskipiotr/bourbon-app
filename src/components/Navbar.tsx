import { useState, useEffect } from "react";
import { navbarLinks } from "../utilities";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSun, BiMoon, BiMenu, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isVintage: boolean;
  toggleTheme: () => void;
}

const menuVariants = {
  hidden: { height: 0, opacity: 0, transition: { when: "afterChildren" } },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function Navbar({ isVintage, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setMounted(true));
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={mounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          backdrop-blur-md
          border-b border-transparent
          ${hasScrolled ? "border-primary-color-glow" : ""}
          select-none
          py-3 px-10 md:px-18
          flex items-center justify-between border-b border-white/10
        `}
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Left: Logo + name */}
        <div className="flex items-center space-x-3 shrink-0">
          <div
            className="rounded-full p-1"
            style={{
              backgroundColor: "rgba(200, 145, 51, 0.15)",
              boxShadow: "0 0 24px 4px rgba(200, 145, 51, 0.25)",
              filter: "blur(0.5px)",
              WebkitFilter: "blur(1px)",
            }}
          >
            <img
              src="/barrel-logo.png"
              alt="Barrel Logo"
              className="h-8 w-8 object-contain rounded-full relative z-10"
            />
          </div>
          <h2 className="font-cormorant text-2xl text-primary-color">PD</h2>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-2 font-raleway text-lg">
          {navbarLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="nav-link uppercase font-extralight text-[15px]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Social + theme toggle */}
        <div className="hidden md:flex items-center text-primary-color">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="nav-link p-2 rounded-md hover:border-primary-color-glow hover:text-primary-color transition duration-500 ease-in-out"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Twitter"
            className="nav-link p-2 rounded-md hover:border-primary-color-glow hover:text-primary-color transition duration-500 ease-in-out"
          >
            <FaTwitter size={22} />
          </a>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="nav-link p-2 cursor-pointer"
          >
            {isVintage ? <BiSun size={22} /> : <BiMoon size={22} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden nav-link p-2 rounded-md hover:border-primary-color-glow hover:text-primary-color transition duration-500 ease-in-out cursor-pointer"
        >
          {menuOpen ? <BiX size={26} /> : <BiMenu size={26} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // Change to fixed positioning and very high z-index so it overlays everything
            className="fixed top-16 left-0 right-0 bg-(--glass-bg) backdrop-blur-md flex flex-col px-6 py-5 md:hidden shadow-lg z-[9999]"
          >
            {navbarLinks.map(({ label, href }) => (
              <motion.li
                key={label}
                variants={linkVariants}
                className="mb-3 last:mb-0"
              >
                <a
                  href={href}
                  onClick={onLinkClick}
                  className="block font-raleway text-sm nav-link uppercase ml-10"
                >
                  {label}
                </a>
              </motion.li>
            ))}

            <motion.li
              variants={linkVariants}
              className="mt-4 flex space-x-6 justify-center"
            >
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md hover:border-primary-color-glow hover:text-primary-color transition duration-500 ease-in-out"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="p-2 rounded-md hover:border-primary-color-glow hover:text-primary-color transition duration-500 ease-in-out"
              >
                <FaTwitter size={20} />
              </a>
              <button
                type="button"
                aria-label="Toggle Theme"
                onClick={toggleTheme}
                className="p-2 cursor-pointer"
              >
                {isVintage ? <BiSun size={26} /> : <BiMoon size={26} />}
              </button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
