"use client";

import { motion } from "motion/react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2, delay, ease: "easeOut" }}
      className={cn("absolute", className)}
    >
      <div
        style={{ width, height }}
        className={cn(
          "absolute inset-0 rounded-full",
          gradient,
          "backdrop-blur-[2px] border-2 border-white/[0.15]",
          "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
        )}
      />
    </motion.div>
  );
}

export default function HeroGeometric() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background shapes */}
      <ElegantShape delay={0.2} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-10%] top-[15%]" />
      <ElegantShape delay={0.4} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] top-[70%]" />
      <ElegantShape delay={0.6} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[5%] bottom-[5%]" />

      {/* Hero content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
        >
          <Image src="https://ui.codesnipet.dev/logo.svg" alt="CodeSnippet UI" width={20} height={20} />
          <span className="text-sm text-white/60">CodeSnippet UI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={cn("text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight", pacifico.className)}
        >
          Elevate Your <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300">
            Digital Vision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-white/40 text-lg max-w-xl mx-auto"
        >
          Crafting exceptional digital experiences through innovative design and cutting-edge technology.
        </motion.p>
      </div>
    </div>
  );
}
