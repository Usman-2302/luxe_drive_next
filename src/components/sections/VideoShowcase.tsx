"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoShowcase() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(() => {
                    // Autoplay might be blocked
                    setIsPlaying(false);
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-black flex items-center justify-center">
            {/* Parallax Background Container */}
            <motion.div
                ref={containerRef}
                style={{ y }}
                className="absolute inset-0 w-full h-[120%]"
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover opacity-60"
                    src="/videos/luxury-showcase.mp4"
                    poster="/images/hero/hero-9.jpg"
                    loop
                    muted={isMuted}
                    playsInline
                />
                {/* Cinematic Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[hsl(var(--gold))] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">
                        The Experience
                    </p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-white mb-6 leading-tight">
                        Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-transparent">Transport</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                        Immerse yourself in a world where every journey is crafted with precision, silence, and unparalleled elegance.
                    </p>
                </motion.div>

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-4"
                >
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={togglePlay}
                        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
                    >
                        {isPlaying ? (
                            <Pause className="h-6 w-6 text-white fill-white/20" />
                        ) : (
                            <Play className="h-6 w-6 text-white fill-white/20 ml-1" />
                        )}
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleMute}
                        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                        {isMuted ? (
                            <VolumeX className="h-6 w-6 text-white" />
                        ) : (
                            <Volume2 className="h-6 w-6 text-white" />
                        )}
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 pointer-events-none">
                <div className="h-px w-20 bg-gradient-to-r from-[hsl(var(--gold))] to-transparent" />
                <div className="h-px w-20 bg-gradient-to-l from-[hsl(var(--gold))] to-transparent" />
            </div>
        </section>
    );
}
