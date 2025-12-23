"use client";

import { motion } from "framer-motion";

export function BrandedLoader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] grid place-items-center bg-background/90 backdrop-blur-md"
        >
            <div className="flex flex-col items-center justify-center gap-12">
                {/* Advanced Car Silhouette Animation */}
                <div className="relative w-40 h-16">
                    <motion.svg
                        width="160"
                        height="40"
                        viewBox="0 0 160 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-[hsl(var(--gold))] stroke-[1.5px]"
                    >
                        <motion.path
                            d="M10,27 L25,27 C27,27 29,25 30,23 L40,7 C44,1 50,1 55,1 L105,1 C112,1 118,5 120,11 L128,23 C130,25 132,27 135,27 L150,27"
                            strokeDasharray="200"
                            initial={{ strokeDashoffset: 200 }}
                            animate={{
                                strokeDashoffset: [200, 0, -200],
                            }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                        {/* Dynamic Wheels */}
                        <motion.circle
                            cx="35"
                            cy="34"
                            r="6"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 1, 0],
                                scale: [0.8, 1, 1, 0.8]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                        />
                        <motion.circle
                            cx="125"
                            cy="34"
                            r="6"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0, 1, 1, 0],
                                scale: [0.8, 1, 1, 0.8]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.1 }}
                        />
                    </motion.svg>

                    {/* Shadow pulse */}
                    <motion.div
                        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-[hsl(var(--gold))]/10 blur-sm rounded-full"
                        animate={{
                            scaleX: [0.8, 1.2, 0.8],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Text Animation */}
                <div className="flex flex-col items-center gap-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-playfair text-2xl font-bold tracking-[0.4em] text-foreground"
                    >
                        LUXE DRIVE
                    </motion.h1>
                    <div className="relative w-32 h-[1px] bg-white/10 overflow-hidden">
                        <motion.div
                            initial={{ left: "-100%" }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent"
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[10px] tracking-[0.6em] uppercase text-muted-foreground mt-2"
                    >
                        Precision . Poise . Perfection
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}
