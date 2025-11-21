import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { classicProducts } from "../utilities";



const springTransition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
} as const;

export default function ClassicStableCards() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-(--bg-color) text-(--text-primary) px-10 py-20 flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl mb-12 text-(--primary-color)">
        Classic Bourbons
      </h1>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {classicProducts.map(({ id, name, image, description }) => (
          <motion.div
            key={id}
            layoutId={`card-${id}`}
            className="glassmorphic cursor-pointer rounded-xl p-6 w-[360px] h-[420px] select-none shadow-md"
            onClick={() => setSelected(id)}
            initial={{ boxShadow: "0 0 8px rgba(0,0,0,0.15)" }}
            whileHover={{
              boxShadow:
                "0 0 12px var(--primary-color-glow), 0 4px 12px rgba(0,0,0,0.3)",
            }}
            transition={springTransition}
            style={{ willChange: "transform, box-shadow" }}
          >
            <img
              src={image}
              alt={name}
              className="rounded-2xl mb-5 object-cover h-44 w-full shadow-inner"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold text-(--primary-color)">
              {name}
            </h2>
            <p className="text-(--text-secondary) text-sm">{description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            layoutId={`card-${selected}`}
            className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-10 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-(--bg-color) glassmorphic rounded-3xl shadow-2xl max-w-3xl w-full p-12 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 100, damping: 10 },
              }}
              exit={{ y: 20, opacity: 0, transition: { duration: 0.3 } }}
              style={{ willChange: "transform, opacity" }}
            >
              <button
                type="button"
                aria-label="Close details"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-5 text-(--primary-color) text-3xl font-semibold cursor-pointer select-none"
              >
                ×
              </button>

              <img
                src={classicProducts.find((p) => p.id === selected)?.image}
                alt={classicProducts.find((p) => p.id === selected)?.name}
                className="rounded-2xl mb-8 w-full h-60 object-cover shadow-md"
              />
              <h2 className="text-4xl font-cormorant mb-6 text-(--primary-color)">
                {classicProducts.find((p) => p.id === selected)?.name}
              </h2>
              <p className="text-(--text-secondary) leading-relaxed text-lg max-w-prose mx-auto">
                {classicProducts.find((p) => p.id === selected)?.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
