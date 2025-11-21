import { useState } from "react";

export default function Bestie() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <main
      role="main"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-20 lg:px-44 py-24 md:py-20 bg-(--bg-color) text-(--text-primary) font-raleway"
      aria-label="Elegant tribute to Best'ie Bourbon product"
    >
      {/* Product Image */}
      <section className="shrink-0 w-full md:w-1/2 max-w-lg rounded-lg overflow-hidden shadow-2xl ring-1 ring-(--primary-color-glow)">
        <img
          src="/bestie-bourbon-elegant.png"
          alt="Best'ie Bourbon bottle tribute"
          className="w-full h-auto object-cover"
          loading="lazy"
          style={{ borderRadius: "1rem" }}
        />
      </section>

      {/* Description Panel */}
      <section
        className="w-full md:w-1/2 flex flex-col justify-center bg-[rgba(8,8,8,0.7)] backdrop-blur-xl rounded-md p-14 shadow-md border border-(--primary-color)/15 text-(--text-primary)"
        style={{ boxShadow: "1px 0 5px 1px rgba(200,145,51,0.4)" }}
      >
        <h1 className="font-cormorant text-5xl mb-4 text-(--primary-color) tracking-wide text-center relative after:absolute after:left-1/2 after:-bottom-3 after:w-44 after:h-px after:bg-(--primary-color) after:rounded-md after:-translate-x-1/2 after:opacity-70">
          Best'ie Bourbon
        </h1>
        <p className="mb-6 leading-relaxed text-(--text-secondary) text-lg md:text-xl max-w-prose mx-auto text-center">
          [translate: Born from the heart of Kentucky’s limestone, this bottle
          carries the soul of centuries in every drop.]
          <br />
          [translate: Crafted with masterful precision, patiently aged to
          perfection, Best’ie Bourbon is an ode to tradition and passion.]
          <br />
          [translate: Rich caramel, vanilla, and oak mingle with whispers of
          spice and smoke, inviting contemplation with every sip.]
        </p>
        <div
          className="italic text-(--secondary-color) text-md max-w-prose mx-auto text-center relative cursor-help"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          tabIndex={0}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          aria-describedby="tooltip-quote"
        >
          [translate: “Perfect bourbon isn’t made, it’s earned.”]
          {showTooltip && (
            <div
              id="tooltip-quote"
              role="tooltip"
              className="absolute bg-(--primary-color) text-(--bg-color) text-sm p-3 rounded-md shadow-lg max-w-xs mt-2 -translate-x-1/2 left-1/2 z-20"
            >
              [translate: A timeless reminder from master distillers about the
              dedication behind every bottle.]
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
