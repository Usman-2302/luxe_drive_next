"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FleetCard } from "@/components/cards/FleetCard";
import { fleet } from "@/data/fleet";
import { cn } from "@/lib/utils";

type VehicleType = "All" | "Sedan" | "SUV" | "Van";

export function FleetGallery() {
    const [activeType, setActiveType] = useState<VehicleType>("All");

    const filteredFleet = useMemo(() => {
        return activeType === "All"
            ? fleet
            : fleet.filter(v => v.type === activeType);
    }, [activeType]);

    const categoryCounts = useMemo(() => {
        return {
            All: fleet.length,
            Sedan: fleet.filter(v => v.type === "Sedan").length,
            SUV: fleet.filter(v => v.type === "SUV").length,
            Van: fleet.filter(v => v.type === "Van").length,
        };
    }, []);

    return (
        <section className="py-24 luxury-container">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                {(["All", "Sedan", "SUV", "Van"] as VehicleType[]).map((type) => (
                    <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={cn(
                            "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border",
                            activeType === type
                                ? "bg-[hsl(var(--gold))] text-slate-950 border-[hsl(var(--gold))] shadow-lg shadow-[hsl(var(--gold))]/20"
                                : "bg-accent/30 text-muted-foreground border-border/40 hover:border-[hsl(var(--gold))]/40"
                        )}
                    >
                        <span className="flex items-center gap-2">
                            {type}
                            <span className={cn(
                                "text-[10px] px-1.5 py-0.5 rounded-md",
                                activeType === type ? "bg-slate-950/10" : "bg-accent"
                            )}>
                                {categoryCounts[type]}
                            </span>
                        </span>
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredFleet.map((vehicle, index) => (
                        <motion.div
                            key={vehicle.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <FleetCard vehicle={vehicle} index={index} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredFleet.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <p className="text-xl text-muted-foreground font-light font-['Playfair_Display']">
                        No vehicles available in this category at the moment.
                    </p>
                </motion.div>
            )}
        </section>
    );
}
