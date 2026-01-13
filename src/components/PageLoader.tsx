"use client";

import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Logo} from "@/components/hero/logo";

interface PageLoaderProps {
    onLoadingComplete?: () => void;
}

export default function PageLoader({onLoadingComplete}: PageLoaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkReady = () => {
            if (document.readyState === "complete") {
                setTimeout(() => {
                    setIsLoading(false);
                    onLoadingComplete?.();
                }, 1000);
            }
        };

        if (document.readyState === "complete") {
            checkReady();
        } else {
            window.addEventListener("load", checkReady);
        }

        return () => {
            window.removeEventListener("load", checkReady);
        };
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
                >
                    <motion.div
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <Logo/>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}