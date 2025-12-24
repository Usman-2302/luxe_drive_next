"use client";

import { motion } from "framer-motion";
import { Luggage, Briefcase, Info } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceLuggageProps {
    luggage: Service["luggage"];
}

export function ServiceLuggage({ luggage }: ServiceLuggageProps) {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold font-['Playfair_Display']">Luggage Guidelines</h3>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-white/5 dark:backdrop-blur-md dark:border-white/5 relative overflow-hidden shadow-[0_4px_20px_-5px_rgba(212,175,55,0.15)]">
                {/* Decorative background icon */}
                <Luggage className="absolute -right-6 -bottom-6 w-32 h-32 text-[hsl(var(--gold))]/5 rotate-12" />

                <div className="relative z-10 grid sm:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gold))]/10 flex items-center justify-center">
                                <Luggage className="w-6 h-6 text-[hsl(var(--gold))]" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[hsl(var(--gold))]">{luggage.large}</p>
                                <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Large Suitcases</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gold))]/10 flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-[hsl(var(--gold))]" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[hsl(var(--gold))]">{luggage.carryOn}</p>
                                <p className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Carry-on Bags</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-xl bg-white dark:bg-black/20 border border-[hsl(var(--gold))]/10 flex gap-3">
                        <Info className="w-5 h-5 text-[hsl(var(--gold))] shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                            "{luggage.notes}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
