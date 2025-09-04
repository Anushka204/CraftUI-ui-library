"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

interface BouncingTextProps {
  text?: string;
  className?: string;
  delay?: number;
  bouncingIndices?: number[];
}

export default function Text_05({
  text = "BOUNCE",
  className = "",
  delay = 0.1,
  bouncingIndices = [0, 2, 5],
}: BouncingTextProps) {
  // Define variants using the proper Variants type
  const letterAnimation: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 0],
      scaleY: [0.9, 1],
      scaleX: [1.1, 1],
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.2,
      },
    },
  };

  return (
    <div className="flex items-center justify-center gap-[2px]">
      {text.split("").map((letter, index) =>
        bouncingIndices.includes(index) ? (
          <motion.span
            key={`text-05-${letter}-${index}`}
            className={cn(
              "text-4xl font-bold text-black dark:text-white",
              "transition-colors duration-200",
              "hover:text-purple-500 dark:hover:text-purple-400",
              className
            )}
            variants={letterAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: index * delay }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
          >
            {letter}
          </motion.span>
        ) : (
          <span
            key={`text-05-plain-${letter}-${index}`}
            className={cn(
              "text-4xl font-bold text-black dark:text-white",
              "transition-colors duration-200",
              "hover:text-purple-500 dark:hover:text-purple-400",
              className
            )}
          >
            {letter}
          </span>
        )
      )}
    </div>
  );
}
