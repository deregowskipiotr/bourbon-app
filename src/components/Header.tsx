import { motion } from "framer-motion";
import Button from "./Button";

export default function Header() {
  return (
    <section
      aria-label="Hero section introducing the bourbon app"
      className="flex flex-col items-center justify-center h-screen text-center px-4 md:px-12 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 80% 25%, rgba(200, 145, 51, 0.08) 0%, transparent 70%)",
      }}
    >
      {/* Animated Title and subtitle */}
      <motion.h1
        layout="position"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          textShadow: "0 0 16px #C89133, 0 0 32px #C89133",
        }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="font-cormorant text-5xl md:text-7xl font-bold text-(--primary-color) mb-4 select-none z-10 relative will-change-transform will-change-opacity"
      >
        Hello, Bourbon Enthusiasts!{" "}
        <motion.span
          layout="position"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1.8, delay: 1.5, ease: "easeOut" }}
          className="block font-raleway italic text-lg md:text-xl text-(--secondary-color) tracking-wider select-text mt-6 will-change-transform will-change-opacity"
        >
          Sip Happens - Good Taste Starts Here!
        </motion.span>
      </motion.h1>

      {/* Invitation text */}
      <motion.p
        layout="position"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.6, delay: 1, ease: "easeOut" }}
        className="font-raleway text-lg md:text-2xl max-w-3xl text-(--text-secondary) select-text leading-relaxed z-10 relative will-change-transform will-change-opacity"
      >
        Welcome to your bourbon playground—full of tales, tips, and tastes that
        go beyond the usual pour. Whether you're a seasoned sipper or just
        curious, there's a flavor waiting for you. So, what's it going to be?
        You dare, or are you afraid of a hangover?
      </motion.p>

      {/* Add animated Button */}
      <motion.div
        className="mt-16 md:mt-12 z-10"
        style={{ minHeight: 48 }} // reserve space to prevent jumps (adjust height as needed)
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 2, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          <Button>Explore Collection</Button>
        </motion.div>
      </motion.div>

      {/* Bourbon glass image behind text */}
      <motion.img
        src="/whisky glass without BG.png"
        alt="Classic bourbon bottle"
        aria-hidden="true"
        initial={{ opacity: 0, y: "-20%" }}
        animate={{ opacity: 0.18, y: "0%" }}
        transition={{ delay: 3, duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[75%] md:h-full max-w-none opacity-20 pointer-events-none select-none z-0 rounded-md drop-shadow-lg md:ml-[-140px]"
        style={{ willChange: "transform, opacity" }}
      />
    </section>
  );
}
