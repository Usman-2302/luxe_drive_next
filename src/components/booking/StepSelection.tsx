"use client";

import React from "react";
import { motion } from "framer-motion";
import { useBooking } from "./BookingContext";
import { fleet } from "@/data/fleet";
import { chauffeurs } from "@/data/chauffeurs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, Users, ChevronLeft, ArrowRight, Car, UserCheck } from "lucide-react";
import Image from "next/image";

export function StepSelection({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
    const { state, updateState } = useBooking();

    return (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold font-['Playfair_Display']">Pair Your <span className="text-gradient">Experience</span></h2>
                <p className="text-muted-foreground font-light max-w-xl mx-auto">Select the perfect vehicle and master chauffeur for your journey.</p>
            </div>

            {/* Vehicle Grid */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20">
                        <Car className="h-5 w-5 text-[hsl(var(--gold))]" />
                    </div>
                    <h3 className="text-xl font-bold font-['Playfair_Display'] uppercase tracking-widest text-xs">Selection Phase A: Elite Fleet</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fleet.map((v) => (
                        <div
                            key={v.id}
                            onClick={() => updateState({ vehicleId: v.id })}
                            className={cn(
                                "relative group overflow-hidden rounded-[2rem] glass border transition-all cursor-pointer",
                                state.vehicleId === v.id ? "border-[hsl(var(--gold))] ring-1 ring-[hsl(var(--gold))]/20 shadow-[0_4px_20px_-5px_rgba(212,175,55,0.15)]" : "border-border/40 hover:border-border/60 hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.1)]"
                            )}
                        >
                            <Image
                                src={v.image}
                                alt={v.name}
                                width={400}
                                height={160}
                                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="p-5">
                                <p className="font-bold text-base mb-1">{v.name}</p>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {v.seats} Seats</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chauffeur Grid */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20">
                        <UserCheck className="h-5 w-5 text-[hsl(var(--gold))]" />
                    </div>
                    <h3 className="text-xl font-bold font-['Playfair_Display'] uppercase tracking-widest text-xs">Selection Phase B: Managed Crew</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {chauffeurs.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => updateState({ chauffeurId: c.id })}
                            className={cn(
                                "p-4 rounded-[1.5rem] glass border text-center transition-all cursor-pointer",
                                state.chauffeurId === c.id ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/5 shadow-[0_4px_20px_-5px_rgba(212,175,55,0.15)]" : "border-border/40 hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.1)]"
                            )}
                        >
                            <div className="relative w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden border-2 border-border/20 shadow-lg">
                                <Image
                                    src={c.image}
                                    alt={c.name}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </div>
                            <p className="font-bold text-xs mb-1">{c.name}</p>
                            <div className="flex items-center justify-center gap-1 text-[10px] text-[hsl(var(--gold))] font-bold">
                                <Star className="h-2 w-2 fill-current" /> {c.rating}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border/40 p-4">
                <Button variant="ghost" onClick={onPrev} className="w-full sm:w-auto rounded-xl">
                    <ChevronLeft className="h-5 w-5 mr-2" /> Previous
                </Button>
                <Button
                    variant="luxury-gold"
                    size="xl"
                    disabled={!state.vehicleId || !state.chauffeurId}
                    onClick={onNext}
                    className="w-full sm:w-auto rounded-2xl group px-8 sm:px-12"
                >
                    Technical Details
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
