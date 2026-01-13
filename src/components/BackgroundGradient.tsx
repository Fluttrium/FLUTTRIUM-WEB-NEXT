"use client";

import { useEffect, useState } from "react";
import GradientBlinds from "@/components/GradientBlinds";

export default function BackgroundGradient() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="fixed inset-0 z-0 gradient-background">
            <GradientBlinds
                gradientColors={["#FF9FFC", "#5227FF"]}
                angle={204}
                noise={0.3}
                blindCount={64}
                blindMinWidth={200}
                mouseDampening={0.99}
                mirrorGradient={false}
                spotlightRadius={0.3}
                spotlightSoftness={1}
                spotlightOpacity={1}
                distortAmount={91}
                shineDirection="left"
            />
        </div>
    );
}