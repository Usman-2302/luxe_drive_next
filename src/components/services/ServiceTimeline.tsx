"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

interface ServiceTimelineProps {
    steps: Service["process"];
}

export function ServiceTimeline({ steps }: ServiceTimelineProps) {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-bold font-['Playfair_Display']">The Experience</h3>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[24px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/50 to-transparent" />

                {/* Connecting Line (Mobile) */}
                <div className="md:hidden absolute left-[24px] top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[hsl(var(--gold))]/50 to-transparent" />

                <div className="grid md:grid-cols-5 gap-8">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 group"
                            >
                                {/* Icon Circle */}
                                <div className="relative z-10 w-12 h-12 rounded-full bg-background border-2 border-[hsl(var(--gold))]/20 flex items-center justify-center group-hover:border-[hsl(var(--gold))] group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 md:text-center pt-1 md:pt-2">
                                    <div className="text-xs font-bold text-[hsl(var(--gold))]/50 uppercase tracking-widest mb-1">Step 0{i + 1}</div>
                                    <h4 className="font-bold text-foreground dark:text-white mb-1">{step.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
