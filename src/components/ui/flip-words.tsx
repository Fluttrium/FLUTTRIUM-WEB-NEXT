"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [isAnimating, duration, startAnimation]);

  // Function to split word into parts (letters and spaces)
  const splitWord = (word: string) => {
    const parts = [];
    let part = "";
    for (const char of word) {
      if (char === " ") {
        if (part) {
          parts.push(part);
          part = "";
        }
        parts.push(" ");
      } else {
        part += char;
      }
    }
    if (part) {
      parts.push(part);
    }
    return parts;
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
        key={currentWord}
      >
        {splitWord(currentWord).map((part, index) =>
          part === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            part.split("").map((letter, i) => (
              <motion.span
                key={currentWord + index + i}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};
