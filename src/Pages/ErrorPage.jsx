import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {useNavigate} from "react-router-dom";

export default function ErrorPage() {
    const glitchRef = useRef(null);
    const starsRef = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Glitch animation for 404 text
        gsap.to(glitchRef.current, {
            skewX: 10,
            duration: 0.08,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Floating stars animation
        starsRef.current.forEach((star, i) => {
            gsap.fromTo(
                star,
                { y: 0, opacity: 0.3 },
                {
                    y: -200 - i * 40,
                    opacity: 1,
                    duration: 6 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                }
            );
        });
    }, []);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
            {/* Animated gradient glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-cyan-500/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Floating stars */}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (starsRef.current[i] = el)}
                    className="absolute w-1 h-1 rounded-full bg-white"
                    style={{
                        left: `${Math.random() * 100}%`,
                        bottom: "-20px",
                    }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10 text-center px-6">
                <motion.h1
                    ref={glitchRef}
                    className="text-8xl md:text-9xl font-extrabold tracking-widest"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "backOut" }}
                >
                    404
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    You slipped into a digital void.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 px-8 py-3 rounded-2xl bg-white text-black font-semibold shadow-xl"
                    onClick={() => navigate("/")}
                >
                    Return to Reality
                </motion.button>
            </div>

            {/* Bottom horizon line */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </div>
    );
}
