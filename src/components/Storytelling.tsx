import { useEffect, useRef } from "react";
import { motion, useInView, type Variants, useAnimation } from "framer-motion";
import { storyChapters } from "../utilities";
// import { StoryChapter } from "../utilities";



// Use correct easing type from Framer Motion
const easing = "easeInOut";

 // Custom cubic bezier easing

const neonBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easing },
  },
};

function StoryChapter({
  year,
  title,
  text,
  image,
  fact,
  reverse = false,
}: {
  year: string;
  title: string;
  text: string;
  image: string;
  fact: string;
  reverse?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easing } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: reverse ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: easing } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className={`flex flex-col md:flex-row items-center justify-around mb-20 md:mb-32 gap-8 md:gap-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image with glow */}
      <motion.div
        className="relative flex-1 max-w-md md:max-w-xl rounded-lg overflow-hidden shadow-2xl"
        variants={sectionVariants}
      >
        <img
          src={image}
          alt={`${title} illustration`}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none rounded-lg shadow-[0_0_24px_8px_rgba(200,145,51,0.6)]"></div>
      </motion.div>

      {/* Text content with slide */}
      <motion.div
        className="flex-1 max-w-lg font-raleway text-left"
        variants={textVariants}
      >
        <div className="mb-3 text-amber-500 font-semibold tracking-wide text-sm uppercase">
          {year}
        </div>
        <h2 className=" text-3xl md:text-4xl mb-4 ">{title}</h2>
        <p className="mb-4 leading-relaxed text-(--text-secondary)">{text}</p>
        <motion.div
          variants={neonBadgeVariants}
          initial="hidden"
          animate={controls}
          className="
    
    bg-(--primary-color)/40     /* Slightly more transparent */
    rounded-lg
    px-5 py-2
    text-sm font-semibold text-(--bg-color)
    shadow-[0_0_12px_rgba(200,145,51,0.5)]
    cursor-pointer
    border border-(--primary-color)/30
    hover:bg-(--primary-color)/50 transition-colors duration-500 ease-in-out
    select-none
  "
        >
          {fact}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default function Storytelling() {
  return (
    <main
      aria-label="Bourbon Storytelling Journey"
      className="min-h-screen bg-(--bg-color) text-(--text-default) px-6 md:px-20 lg:px-44 py-16"
    >
      <header className="mb-14 text-center">
        <h1 className=" text-6xl md:text-7xl ">
          The Story of Bourbon
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-(--secondary-color)">
          A delightful journey through history, flavor, and spirits — told with
          wit and warmth.
        </p>
      </header>

      {storyChapters.map((chapter, index) => (
        <StoryChapter
          key={chapter.year}
          {...chapter}
          reverse={index % 2 !== 0}
        />
      ))}

      <section className="mt-24">
        <h3 className="font-cormorant text-4xl text-(--primary-color) mb-8 text-center">
          Voices of Bourbon Lovers
        </h3>
        <div className="text-center text-(--text-secondary) italic max-w-xl mx-auto">
          “Bourbon warms the soul and lights up the night.” — Anonymous Lover
          <br />
          “Each bottle is a story, a symphony of fire and oak.” — Master
          Distiller
        </div>
      </section>
    </main>
  );
}
