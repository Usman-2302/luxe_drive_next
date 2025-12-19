"use client";

import React from "react";
import { useBooking } from "./BookingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ChevronLeft, ArrowRight, MapPin, Calendar, Clock, PlaneTakeoff } from "lucide-react";

export function StepDetailsForm({ onNext, onPrev }: { onNext: () => void, onPrev: () => void }) {
    const { state, updateState } = useBooking();

    const isAirport = state.serviceId === "airport";

    const isReady = state.pickup && state.destination && state.date && state.time && (!isAirport || state.flightNumber);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold font-['Playfair_Display']">Journey <span className="text-gradient">Logistics</span></h2>
                <p className="text-muted-foreground font-light max-w-xl mx-auto">Please provide the necessary details for a perfectly timed experience.</p>
            </div>

            <div className="grid gap-8 bg-accent/5 p-8 rounded-[2.5rem] border border-border/40">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <Label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Pickup Location</Label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--gold))]" />
                            <Input
                                className="pl-12 h-14 rounded-2xl glass border-border/40 focus:border-[hsl(var(--gold))]/50 transition-all font-medium"
                                placeholder="Where should we meet you?"
                                value={state.pickup}
                                onChange={(e) => updateState({ pickup: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <Label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Final Destination</Label>
                        <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                className="pl-12 h-14 rounded-2xl glass border-border/40 focus:border-[hsl(var(--gold))]/50 transition-all font-medium"
                                placeholder="Where are we taking you?"
                                value={state.destination}
                                onChange={(e) => updateState({ destination: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <Label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Travel Date</Label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--gold))]" />
                            <Input
                                type="date"
                                className="pl-12 h-14 rounded-2xl glass border-border/40 focus:border-[hsl(var(--gold))]/50 transition-all font-medium"
                                value={state.date}
                                onChange={(e) => updateState({ date: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <Label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Preferred Time</Label>
                        <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--gold))]" />
                            <Input
                                type="time"
                                className="pl-12 h-14 rounded-2xl glass border-border/40 focus:border-[hsl(var(--gold))]/50 transition-all font-medium"
                                value={state.time}
                                onChange={(e) => updateState({ time: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                {isAirport && (
                    <div className="space-y-3 animate-in zoom-in-95">
                        <Label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Flight Number (Required)</Label>
                        <div className="relative">
                            <PlaneTakeoff className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--gold))]" />
                            <Input
                                className="pl-12 h-14 rounded-2xl glass border-border/40 border-l-[hsl(var(--gold))]/40"
                                placeholder="e.g. EK202 (Important for tracking delays)"
                                value={state.flightNumber}
                                onChange={(e) => updateState({ flightNumber: e.target.value })}
                            />
                        </div>
                    </div>
                )}

                <div className="space-y-3">
                    <Label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Special Requirements</Label>
                    <Textarea
                        className="min-h-[120px] rounded-3xl glass border-border/40 focus:border-[hsl(var(--gold))]/50 transition-all p-6 font-light"
                        placeholder="Luggage count, child seats, preferred chilled beverages, etc."
                        value={state.specialRequests}
                        onChange={(e) => updateState({ specialRequests: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex justify-between pt-8 border-t border-border/40">
                <Button variant="ghost" onClick={onPrev} className="rounded-xl">
                    <ChevronLeft className="h-5 w-5 mr-2" /> Back
                </Button>
                <Button
                    variant="luxury-gold"
                    size="xl"
                    disabled={!isReady}
                    onClick={onNext}
                    className="rounded-2xl group px-12"
                >
                    Review Summary
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
