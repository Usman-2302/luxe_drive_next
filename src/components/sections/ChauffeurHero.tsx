"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ChauffeurHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/chauffeurs/c-5.jpg"
                    alt="Professional chauffeur service"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="luxury-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center gap-2 mb-8 text-white/60 text-sm font-medium tracking-widest uppercase">
                        <Link href="/" className="hover:text-[hsl(var(--gold))] transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-[hsl(var(--gold))]">Chauffeurs</span>
                    </nav>

                    <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] text-white mb-6 leading-tight">
                        Meet Our <span className="text-gradient">Elite Chauffeurs</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light font-['Inter'] mb-8">
                        Experience the pinnacle of professionalism, safety, and bespoke service with our world-class team of dedicated chauffeurs.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60 text-sm font-medium tracking-widest uppercase"
                    >
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-px bg-white/30" />
                            <span>Vetted Professionals</span>
                            <span className="w-8 h-px bg-white/30" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-px bg-white/30" />
                            <span>Bilingual Experts</span>
                            <span className="w-8 h-px bg-white/30" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
