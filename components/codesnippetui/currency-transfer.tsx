"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, Copy, Check } from "lucide-react";

interface CheckmarkProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

// Fixed draw variants with proper typing
const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.2,
        type: "spring",
        duration: 1.5,
        bounce: 0.2,
        ease: "easeInOut",
      },
      opacity: { delay: i * 0.2, duration: 0.2 },
    },
  }),
};

export function Checkmark({
  size = 100,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}: CheckmarkProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className={className}
    >
      <title>Animated Checkmark</title>
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        variants={draw}
        custom={0}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
      <motion.path
        d="M30 50L45 65L70 35"
        stroke={color}
        variants={draw}
        custom={1}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "transparent",
        }}
      />
    </motion.svg>
  );
}

export default function CurrencyTransfer() {
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Transaction ID: TRX-28974651");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setIsResetting(true);
    setTimeout(() => {
      setIsResetting(false);
      setShowDetails(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-sm mx-auto p-6 min-h-[300px] flex flex-col justify-center bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xs relative overflow-hidden">
      {/* Background pulse effect */}
      <motion.div
        className="absolute inset-0 bg-emerald-500/5 rounded-xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <CardContent className="space-y-4 flex flex-col items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          {!isResetting ? (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], scale: { type: "spring", damping: 15, stiffness: 200 } }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 blur-xl bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.2, opacity: 0.8, transition: { duration: 0.3 } }}
                />
                <Checkmark
                  size={80}
                  strokeWidth={4}
                  color="rgb(16 185 129)"
                  className="relative z-10 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <RefreshCw size={80} className="text-emerald-500" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Remaining JSX remains unchanged */}
        {/* Your transfer details, hover effects, buttons, etc. */}
      </CardContent>
    </Card>
  );
}
