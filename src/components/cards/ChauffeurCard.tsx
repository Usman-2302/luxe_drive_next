"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Globe, Award, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Chauffeur } from "@/data/chauffeurs";
import { useRouter } from "next/navigation";

interface ChauffeurCardProps {
    chauffeur: Chauffeur;
    index: number;
}

export function ChauffeurCard({ chauffeur, index }: ChauffeurCardProps) {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    const handleReserve = () => {
        router.push(`/booking?chauffeur=${chauffeur.id}&service=corporate`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
        >
            <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                    "relative overflow-hidden rounded-[2.5rem] glass",
                    "border border-border/40 hover:border-[hsl(var(--gold))]/40",
                    "transition-all duration-500 card-glow h-full flex flex-col hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.15)]"
                )}
            >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.img
                        src={chauffeur.image}
                        alt={chauffeur.name}
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0"
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

                    {/* Rating Badge */}
                    <div className="absolute top-6 left-6">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[hsl(var(--gold))]/30 text-xs font-bold text-[hsl(var(--gold))] shadow-lg">
                            <Star className="h-3 w-3 fill-[hsl(var(--gold))]" />
                            {chauffeur.rating}
                        </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute top-6 right-6">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-lg">
                            <Calendar className="h-3 w-3" />
                            {chauffeur.experience}
                        </div>
                    </div>

                    {/* Languages Overlay (Visible on Hover) */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-[hsl(var(--gold))]/90 backdrop-blur-sm flex items-center justify-center p-8 z-20"
                            >
                                <div className="text-center text-slate-950">
                                    <Globe className="h-10 w-10 mx-auto mb-4 opacity-80" />
                                    <h4 className="text-xl font-bold font-['Playfair_Display'] mb-4 uppercase tracking-wider">Languages</h4>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {chauffeur.languages.map((lang, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1.5 rounded-full bg-slate-950 text-white text-xs font-bold"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="mt-8 text-sm font-medium leading-relaxed italic">
                                        "{chauffeur.bio}"
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6 flex-1">
                        <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-2 group-hover:text-[hsl(var(--gold))] transition-colors">
                            {chauffeur.name}
                        </h3>
                        <p className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest mb-4">
                            {chauffeur.role}
                        </p>

                        <div className="space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold flex items-center gap-2">
                                <Award className="h-3.5 w-3.5" /> Specialties
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {chauffeur.specialties.map((spec, i) => (
                                    <span key={i} className="text-[10px] py-1 px-2.5 rounded-md bg-accent/50 text-muted-foreground border border-border/40">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Book Button */}
                    <Button
                        variant="luxury-gold"
                        size="lg"
                        className="w-full rounded-2xl group/btn"
                        onClick={handleReserve}
                    >
                        Reserve Chauffeur
                        <ChevronRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}
