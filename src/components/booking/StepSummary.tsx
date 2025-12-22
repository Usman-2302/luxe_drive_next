"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useBooking } from "./BookingContext";
import { fleet } from "@/data/fleet";
import { chauffeurs } from "@/data/chauffeurs";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, MapPin, Calendar, Clock, CreditCard, User, Car } from "lucide-react";
import Link from "next/link";
import { createBooking } from "@/lib/bookingService";

export function StepSummary({ onPrev }: { onPrev: () => void }) {
    const { state, setConfirmed, resetState } = useBooking();
    const [showSuccess, setShowSuccess] = useState(false);

    const selectedVehicle = fleet.find(v => v.id === state.vehicleId);
    const selectedChauffeur = chauffeurs.find(c => c.id === state.chauffeurId);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleConfirm = async () => {
        setIsSubmitting(true);
        setError(null);
        try {
            await createBooking(state);
            setConfirmed();
            setShowSuccess(true);
            // Persist cleanup after a short delay
            setTimeout(() => {
                resetState();
            }, 2000);
        } catch (err) {
            console.error("Booking submission failed", err);
            setError("Something went wrong. Please try again or contact support.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (showSuccess) {
        return (
            <div className="text-center space-y-12 animate-in zoom-in-95 duration-500">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-[hsl(var(--gold))]/20 flex items-center justify-center text-[hsl(var(--gold))] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                        <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold font-['Playfair_Display']">Reservation <span className="text-gradient">Requested</span></h2>
                        <p className="text-muted-foreground font-light text-lg">Your elite journey is being prioritized by our dispatch team.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 pt-12">
                    <Button variant="luxury-gold" size="xl" className="rounded-2xl px-16 shadow-xl" asChild>
                        <Link href="/">Back to Concierge</Link>
                    </Button>
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">LX-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold font-['Playfair_Display']">Final <span className="text-gradient">Review</span></h2>
                <p className="text-muted-foreground font-light max-w-xl mx-auto">Verify your selection before we secure your dedicated chauffeur.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Col: Selections */}
                <div className="space-y-6">
                    <div className="p-8 rounded-[2.5rem] glass border border-border/40 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-2xl bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20">
                                <Car className="h-6 w-6 text-[hsl(var(--gold))]" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Selected Vehicle</p>
                                <p className="text-xl font-bold font-['Playfair_Display']">{selectedVehicle?.name || "Premium Fleet Item"}</p>
                                <p className="text-xs text-muted-foreground">Hand-polished, climate-controlled executive lounge.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-2xl bg-[hsl(var(--silver))]/10 border border-[hsl(var(--silver))]/20">
                                <User className="h-6 w-6 text-[hsl(var(--silver))]" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Assigned Chauffeur</p>
                                <p className="text-xl font-bold font-['Playfair_Display']">{selectedChauffeur?.name || "Professional Driver"}</p>
                                <p className="text-xs text-muted-foreground">Certified protocol specialist, bilingual master.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Col: Logistics */}
                <div className="space-y-6">
                    <div className="p-8 rounded-[2.5rem] bg-accent/20 border border-border/40 space-y-6 shadow-inner">
                        <div className="space-y-4 pb-4 border-b border-border/40">
                            <h4 className="text-sm font-bold font-['Playfair_Display'] text-[hsl(var(--gold))] uppercase tracking-widest">Journey</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Date & Time</p>
                                    <p className="font-bold text-sm">{state.date} at {state.time}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted-foreground uppercase font-bold">Party Size</p>
                                    <p className="font-bold text-sm">{state.passengers} Passenger(s)</p>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] text-muted-foreground uppercase font-bold">Route</p>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold))]" /> {state.pickup}
                                </div>
                                <div className="w-0.5 h-3 bg-border ml-[3px]" />
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground" /> {state.destination}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sm font-bold font-['Playfair_Display'] text-[hsl(var(--gold))] uppercase tracking-widest">Guest</h4>
                            <div className="space-y-2">
                                <p className="font-bold text-lg">{state.fullName}</p>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                    <p className="flex items-center gap-2">Email: {state.email}</p>
                                    <p className="flex items-center gap-2">Phone: {state.phone}</p>
                                </div>
                            </div>
                            {state.notes && (
                                <div className="p-4 rounded-xl bg-background/50 border border-border/20 text-xs italic">
                                    "{state.notes}"
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-8 border-t border-border/40">
                <Button variant="ghost" onClick={onPrev} className="rounded-xl">
                    <ChevronLeft className="h-5 w-5 mr-2" /> Adjust Details
                </Button>
                <Button
                    variant="luxury-gold"
                    size="xl"
                    onClick={handleConfirm}
                    disabled={isSubmitting}
                    className="rounded-2xl group px-16 shadow-lg hover:shadow-[hsl(var(--gold))]/20"
                >
                    {isSubmitting ? "Securing..." : "Confirm Reservation"}
                    {!isSubmitting && <CheckCircle2 className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />}
                </Button>
            </div>
            {error && <p className="text-center text-destructive text-sm mt-4">{error}</p>}
        </div>
    );
}
