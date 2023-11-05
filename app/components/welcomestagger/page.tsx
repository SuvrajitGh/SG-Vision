"use client"
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

function Welcomestagger() {
  return (
    <main className="bg-black min-h-screen">
      <div className="mx-auto max-w-screen-xl pt-14 text-white">
        <section className="flex h-screen sm:h-[90vh] flex-col items-center justify-center">
          <AnimatedText
            text="Hello there"
            el="h1"
            className="text-5xl sm:text-5xl md:text-6xl xl:text-[200px] text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-purple-600 bg-clip-text"
          />
          Scroll down more...
        </section>

        <section className="flex min-h-screen sm:min-h-[100vh] flex-col items-center justify-center">
          <AnimatedText
            el="h2"
            text={[
              "Welcome to my Portfolio",
              "Hope you will like it",
              "Now lets move on",
            ]}
            className="text-xl sm:text-2xl md:text-5xl text-transparent bg-gradient-to-r from-violet-500 via-pink-500 to-purple-600 bg-clip-text"
            repeatDelay={10000}
          />
        </section>
      </div>
    </main>
  );
}

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView,repeatDelay,controls]);

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default Welcomestagger;
