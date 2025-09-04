"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface AvatarOption {
  id: number;
  src: string;
  alt: string;
}

const avatarOptions: AvatarOption[] = [
  { id: 1, src: "/avatars/avatar1.png", alt: "Avatar 1" },
  { id: 2, src: "/avatars/avatar2.png", alt: "Avatar 2" },
  { id: 3, src: "/avatars/avatar3.png", alt: "Avatar 3" },
];

const selectedVariants: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
};

export default function AvatarPicker() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex gap-6">
      {avatarOptions.map((avatar) => (
        <button
          key={avatar.id}
          onClick={() => setSelected(avatar.id)}
          className="relative w-20 h-20 rounded-full overflow-hidden focus:outline-none"
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            className="object-cover"
          />

          {selected === avatar.id && (
            <motion.div
              className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg shadow-primary/40"
              variants={selectedVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </button>
      ))}
    </div>
  );
}
