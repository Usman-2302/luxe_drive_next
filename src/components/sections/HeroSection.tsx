"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const heroImages = [
    "/images/hero/hero-1.jpg",
    "/images/hero/hero-2.jpg",
    "/images/hero/hero-5.jpg",
    "/images/hero/hero-4.jpg",
];

const editorialImages = [
    "/images/hero/hero-3.jpg", // Exterior
    "/images/hero/hero-6.jpg", // Interior
    "/images/hero/hero-5.jpg", // Close-up
    "/images/hero/hero-9.jpg", // Action
];

// Placeholder blur data (very small base64 pixel)
const BLUR_PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

const stats = [
    { label: "Happy Clients", value: 15000, suffix: "+" },
    { label: "Premium Vehicles", value: 50, suffix: "+" },
    { label: "Years Experience", value: 12, suffix: "" },
    { label: "Cities Served", value: 25, suffix: "+" },
];

export function HeroSection() {
    const [currentBg, setCurrentBg] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { ref, isInView } = useScrollAnimation();

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % editorialImages.length);
        }, 6000);

        return () => {
            clearInterval(bgInterval);
            clearInterval(slideInterval);
        };
    }, []);

    return (
        <section
            id="booking"
            className="relative min-h-[85vh] flex items-center pt-12 lg:pt-16 overflow-hidden"
        >
            {/* Cinematic background carousel */}
            {heroImages.map((img, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentBg === i ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 -z-20"
                >
                    <Image
                        src={img}
                        alt="Hero Background"
                        fill
                        priority={i === 0}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={BLUR_PLACEHOLDER}
                        sizes="100vw"
                        quality={85}
                    />
                    {/* Theme-aware background overlays for readability */}
                    <div className="absolute inset-0 bg-white/40 dark:bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent dark:from-black/80 dark:via-black/20 dark:to-transparent" />
                </motion.div>
            ))}

            {/* Global Vignette - adapted for theme */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_40%,_rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0,_transparent_40%,_rgba(0,0,0,0.5)_100%)]" />

            <div className="luxury-container py-12 lg:py-14 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-[hsl(var(--silver))]/20 bg-black/5 dark:bg-black/20 px-4 py-1.5 text-[10px] xl:text-xs font-medium tracking-[0.25em] uppercase text-slate-600 dark:text-[hsl(var(--silver))] backdrop-blur-md"
                        >
                            Bespoke Chauffeur Service
                        </motion.p>
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.25rem] font-bold font-['Playfair_Display'] leading-[1.1] text-slate-950 dark:text-white">
                                Arrive with
                                {" "}
                                <span className="text-gradient">absolute confidence</span>
                                .
                            </h1>
                            <p className="text-base md:text-lg text-slate-700 dark:text-white/80 max-w-xl font-sans leading-relaxed">
                                Discreet, punctual, and meticulously curated journeys for executives, creators,
                                and guests who expect more than simply getting from A to B.
                            </p>
                        </div>

                        <div className="pt-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="inline-block"
                            >
                                <Button
                                    variant="luxury-gold"
                                    size="xl"
                                    className="rounded-2xl px-12 h-16 text-lg group shadow-2xl relative overflow-hidden ring-1 ring-white/10"
                                    asChild
                                >
                                    <Link href="/booking">
                                        <span className="relative z-10 flex items-center">
                                            Book Your Elite Chauffeur
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <motion.div
                                            className="absolute inset-x-0 bottom-0 h-0.5 bg-white/40"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <div
                            ref={ref}
                            className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {stats.map((stat, i) => (
                                <StatItem
                                    key={i}
                                    stat={stat}
                                    isInView={isInView}
                                    delay={i * 0.1}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Editorial Visual Slider Side Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="hidden lg:block relative group h-[480px] xl:h-[580px]"
                    >
                        <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-slate-900/40">
                            {/* Slider Images */}
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    {/* Parallax Image Wrapper */}
                                    <motion.div
                                        whileHover={{ scale: 1.04 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={editorialImages[currentSlide]}
                                            alt={`Luxe Drive Vehicle Showcase ${currentSlide + 1}`}
                                            fill
                                            priority={currentSlide === 0}
                                            className="object-cover"
                                            placeholder="blur"
                                            blurDataURL={BLUR_PLACEHOLDER}
                                            sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 800px"
                                            quality={80}
                                        />
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Overlays optimized for theme/readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0,_rgba(0,0,0,0.3)_100%)]" />

                            {/* Film Grain Effect */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/patterns/carbon-fibre.png')] mix-blend-overlay" />

                            {/* Editorial Text Overlay */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="absolute inset-0 flex flex-col justify-end p-10 xl:p-12 space-y-3"
                            >
                                <motion.div variants={itemVariants} className="space-y-1">
                                    <p className="text-[hsl(var(--gold))] text-[10px] xl:text-xs font-bold font-['Playfair_Display'] uppercase tracking-[0.4em]">
                                        LUXE DRIVE EXECUTIVE VEHICLE
                                    </p>
                                    <p className="text-sm xl:text-base font-medium font-['Playfair_Display'] italic text-white leading-none">
                                        Signature
                                    </p>
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-3">
                                    <p className="text-lg xl:text-xl font-['Playfair_Display'] font-medium text-white leading-relaxed max-w-sm">
                                        Uncompromising Service Standards
                                    </p>
                                    <div className="pt-3 border-t border-white/20">
                                        <p className="text-[10px] xl:text-xs font-light text-white/70 tracking-[0.6em] uppercase">
                                            Discreet . Punctual . Personal
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Aesthetic Detail */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2, delay: 1 }}
                            className="absolute -right-8 top-1/2 w-32 h-px bg-gradient-to-l from-[hsl(var(--gold))]/60 to-transparent origin-right"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StatItem({ stat, isInView, delay }: { stat: typeof stats[0]; isInView: boolean; delay: number }) {
    const count = useCounter({ end: stat.value, enabled: isInView, duration: 2000 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + delay }}
            className="text-left md:text-center"
        >
            <p className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-gradient">
                {count}
                {stat.suffix}
            </p>
            <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-sans font-medium">
                {stat.label}
            </p>
        </motion.div>
    );
}
