"use client";

import React from "react";
import { motion } from "framer-motion";
import { useBooking, ServiceType } from "./BookingContext";
import { Plane, Hotel, Briefcase, Heart, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICES = [
    { id: "airport", title: "Airport Transfer", icon: Plane, desc: "Punctual arrivals and stress-free terminal transfers." },
    { id: "hotel", title: "Hotel Transfer", icon: Hotel, desc: "Seamless door-to-door service between your stay and destinations." },
    { id: "corporate", title: "Corporate Travel", icon: Briefcase, desc: "Professional transportation for executive roadshows and meetings." },
    { id: "wedding", title: "Wedding Events", icon: Heart, desc: "Elegant arrivals for your most significant life milestone." },
    { id: "tour", title: "City Tours", icon: MapPin, desc: "Explore the city's landmarks in absolute comfort and privacy." },
] as const;

export function StepServiceSelection({ onNext }: { onNext: () => void }) {
    const { state, updateState } = useBooking();

    const handleSelect = (id: ServiceType) => {
        updateState({ serviceId: id });
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold font-['Playfair_Display']">Select Your <span className="text-gradient">Service</span></h2>
                <p className="text-muted-foreground font-light max-w-xl mx-auto">Choose the nature of your journey to customize your experience.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((s) => (
                    <motion.div
                        key={s.id}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelect(s.id)}
                        className={cn(
                            "p-6 rounded-[2rem] glass border transition-all cursor-pointer group",
                            state.serviceId === s.id
                                ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                                : "border-border/40 hover:border-[hsl(var(--gold))]/40"
                        )}
                    >
                        <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors",
                            state.serviceId === s.id ? "bg-[hsl(var(--gold))] text-slate-950" : "bg-accent/30 text-[hsl(var(--gold))]"
                        )}>
                            <s.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 font-['Playfair_Display']">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center pt-8">
                <Button
                    variant="luxury-gold"
                    size="xl"
                    disabled={!state.serviceId}
                    onClick={onNext}
                    className="rounded-2xl px-12 group"
                >
                    Continue to Selection
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
