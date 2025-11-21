import { motion } from "framer-motion";
import Button from "./Button";


export default function Header() {
  return (
    <section
      aria-label="Hero section introducing the bourbon app"
      className="flex flex-col items-center justify-center h-screen text-center px-4 md:px-12 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle, rgba(200,145,51,0.15) 0%, transparent 70%)",
      }}
    >
      {/* Animated Title and subtitle */}
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.85,
          textShadow: "0 0 0 rgba(200,145,51,0)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          textShadow: "0 0 16px #C89133, 0 0 32px #C89133",
        }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="font-cormorant text-5xl md:text-7xl font-bold text-(--primary-color) mb-4 select-none z-10 relative"
      >
        Hello, Bourbon Enthusiasts!{" "}
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 1.8, delay: 1.5, ease: "easeOut" }}
          className="block font-raleway italic text-lg md:text-xl text-(--secondary-color) tracking-wider select-text mt-6"
        >
          Sip Happens - Good Taste Starts Here!
        </motion.span>
      </motion.h1>

      {/* Invitation text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.6, delay: 1, ease: "easeOut" }}
        className="font-raleway text-lg md:text-2xl max-w-3xl text-(--text-secondary) select-text leading-relaxed z-10 relative"
      >
        Welcome to your bourbon playground—full of tales, tips, and tastes that
        go beyond the usual pour. Whether you're a seasoned sipper or just
        curious, there's a flavor waiting for you. So, what's it going to be?
        You dare, or are you afraid of a hangover?
      </motion.p>

      {/* Add animated Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 2, ease: "easeOut" }}
        className="mt-18 md:mt-15 z-10"
      >
        <Button >Explore Collection</Button>
        
      </motion.div>

      {/* Bourbon bottle image behind text */}
      <motion.img
        src="/bourbon-glass.png"
        alt="Classic bourbon bottle"
        aria-hidden="true"
        initial={{ opacity: 0, y: "-20%" }}
        animate={{ opacity: 0.18, y: "0%" }}
        transition={{ delay: 3, duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[75%] md:h-full max-w-none opacity-20 pointer-events-none select-none z-0 rounded-md drop-shadow-lg ml-[53%] md:ml-[20%]"
      />
    </section>
  );
}
