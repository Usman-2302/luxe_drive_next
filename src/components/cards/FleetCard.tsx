"use client";

import { motion } from "framer-motion";
import { Users, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import type { FleetVehicle } from "@/data/fleet";

interface FleetCardProps {
    vehicle: FleetVehicle;
    index: number;
}

export function FleetCard({ vehicle, index }: FleetCardProps) {
    const router = useRouter();

    const handleBookNow = () => {
        router.push(`/booking?vehicle=${vehicle.id}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden glass border border-border/40 hover:border-[hsl(var(--gold))]/40 transition-all duration-500 shadow-xl hover:shadow-[hsl(var(--gold))]/10"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                {/* Type Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                        {vehicle.type}
                    </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-6 right-6">
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">From</span>
                        <span className="text-2xl font-bold text-[hsl(var(--gold))] font-['Playfair_Display']">
                            ${vehicle.price}<span className="text-sm font-normal text-white/70 ml-1">/hr</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
                <div className="mb-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold font-['Playfair_Display'] group-hover:text-[hsl(var(--gold))] transition-colors duration-300">
                            {vehicle.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-muted-foreground bg-accent/30 px-2.5 py-1 rounded-lg">
                            <Users className="h-3.5 w-3.5" />
                            <span className="text-xs font-bold">{vehicle.seats}</span>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                        "{vehicle.description}"
                    </p>

                    <div className="space-y-3">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                            <Info className="h-3.5 w-3.5" /> Key Features
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {vehicle.features.map((feature, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] py-1 px-3 rounded-full bg-accent/50 text-foreground border border-border/40 font-medium"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Button
                    variant="luxury-gold"
                    size="lg"
                    className="w-full rounded-2xl group/btn"
                    onClick={handleBookNow}
                >
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
            </div>
        </motion.div>
    );
}
