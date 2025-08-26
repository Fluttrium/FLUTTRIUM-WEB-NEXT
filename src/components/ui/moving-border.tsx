"use client";
import React from "react";
import { motion } from "framer-motion";

export const Button = ({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Component
      className={`bg-transparent relative text-xl h-16 w-auto px-8 py-4 rounded-full p-[1px] overflow-hidden ${containerClassName}`}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: duration || 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`w-full h-full ${borderClassName}`}
          style={{
            background: "conic-gradient(from 0deg at 50% 50%, #3b82f6, #8b5cf6, #3b82f6)",
          }}
        />
      </div>

      <div
        className={`relative bg-white dark:bg-slate-900 text-black dark:text-white px-6 py-3 rounded-[calc(1.75rem-1px)] h-full w-full flex items-center justify-center ${className}`}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};
