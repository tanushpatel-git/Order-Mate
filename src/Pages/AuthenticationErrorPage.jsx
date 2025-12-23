import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Lock, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import {Button} from "@mui/material";

export default function AuthenticationErrorPage() {
    const lockRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            lockRef.current,
            { rotate: -10, scale: 0.9 },
            {
                rotate: 10,
                scale: 1.05,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            }
        );
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md"
            >
                {/* Container */}
                <div className="bg-slate-900/80 border border-slate-700 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center space-y-6">

                    {/* Animated Lock */}
                    <div ref={lockRef} className="flex justify-center">
                        <Lock className="w-16 h-16 text-indigo-400" />
                    </div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-semibold text-white"
                    >
                        Login Required
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-300"
                    >
                        You need to log in first to access this page.
                        Please sign in to continue and unlock all features.
                    </motion.p>

                    {/* CTA */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/Login">
                            <Button className="w-full gap-2 rounded-xl bg-indigo-500 hover:bg-indigo-600">
                                <LogIn className="w-5 h-5" />
                                Go to Login
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
}
