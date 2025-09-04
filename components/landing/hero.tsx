"use client"

import React from "react"
import { motion } from "motion/react"
import { Sparkles } from "lucide-react"
import TailwindCSS from "../icons/tailwindcss"
import { BrowseComponentsButton } from "../ui/browse-button"
import { BrowseBlocksButton } from "../ui/browse-blocks"
import Features from "./features"
import Link from "next/link"

import Card08 from "../codesnippetui/card/card-08"
import Profile01 from "../codesnippetui/profile/profile-01"
import AIInput_02 from "../codesnippetui/ai-input/ai-input-02"


import Input09 from "../codesnippetui/input/input-09"
import Btn08 from "../codesnippetui/button/btn-08"
import Btn02 from "../codesnippetui/button/btn-02"

export function HeroSection() {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex items-center px-4 sm:px-6 md:py-16 lg:py-20">
      <div className="w-full text-left space-y-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100"
        >
          Build better UIs,<br className="hidden sm:block" />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
            effortlessly.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-600 dark:text-zinc-300"
        >
          100+ premium UI components to accelerate your workflow.
        </motion.p>

        {/* Modern Inline Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl font-medium text-zinc-700 dark:text-zinc-300"
        >
          Crafted with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
            Tailwind CSS
          </span>{" "}
          &{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">
            Shadcn
          </span>{" "}
          for modern React and Next.js applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-start w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-300 text-start flex items-start gap-2">
            <TailwindCSS className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              Now Updated for TAILWIND CSS 4.0!
              <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                <Sparkles className="h-3 w-3 mr-1" />
              </span>
            </span>
          </span>

          {/* Added space above buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>
        <Features/>
      </div>

      <div className="w-full lg:w-[55%] flex flex-col justify-between gap-6 lg:pl-8">
        <motion.div
        initial={{ opacity: 0, y: -20,scale:0.95 }}
          animate={{ opacity: 1, y: 0,scale:1 }}
          transition={{ duration: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 
          items-center justify-center">
            {/**card  comp*/}
          <div className="w-full h-[500px] flex flex-col items-center justify-center">
  <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-4">
   
  </span>
  <div className="w-[400px] h-[300px]">
    <Card08 />
  </div>
</div>


            {/**action search bar */}
           <div className="w-full flex justify-center">
  <div className="w-full max-w-[900px] bg-transparent">
    <span className="text-lg text-zinc-500 dark:text-zinc-400 block text-center mb-4">
    
    </span>
    <Profile01 />
  </div>
</div>


        </motion.div>
        <motion.div 
         initial={{ opacity: 0, y: -20,scale:0.95 }}
          animate={{ opacity: 1, y: 0,scale:1 }}
          transition={{ duration: 0.5 }} className="w-full">
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
            AI Chat
              </span>
              <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
          
                <AIInput_02/>
              </div>
          </motion.div>

  <motion.div 
         initial={{ opacity: 0, y: -20,scale:0.95 }}
          animate={{ opacity: 1, y: 0,scale:1 }}
          transition={{ duration: 0.5 }} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full"></div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              </span>
              <div className="w-full h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-3 items-center justify-center">
                <Link href={"/docs/components/button"}>
                <Btn02/>
                 </Link>

                 <Link href={"/docs/components/button"}>
                 </Link>
                <Btn08/>
              </div>

              <div className="w-full">
                <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
                 
                </span>
                <Link href={"/docs/components/input"}>
                <Input09/>
                </Link>
              </div>
          </motion.div>
      </div>
    </div>
  )
}


