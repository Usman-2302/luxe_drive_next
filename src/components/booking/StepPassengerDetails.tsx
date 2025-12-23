"use client";

import React, { useState } from "react";
import { useBooking } from "./BookingContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, ChevronLeft, User, Mail, Phone, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepPassengerDetailsProps {
    onNext: () => void;
    onPrev: () => void;
}

export function StepPassengerDetails({ onNext, onPrev }: StepPassengerDetailsProps) {
    const { state, updateState } = useBooking();
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!state.fullName || state.fullName.length < 3) newErrors.fullName = "Full name is required";
        if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) newErrors.email = "Valid email is required";
        if (!state.phone || state.phone.length < 10) newErrors.phone = "Valid phone number is required";
        if (state.passengers < 1) newErrors.passengers = "At least 1 passenger required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            onNext();
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold font-['Playfair_Display']">Guest <span className="text-gradient">Details</span></h2>
                <p className="text-muted-foreground font-light max-w-xl mx-auto">
                    Provide your contact information so our concierge can coordinate your journey perfectly.
                </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 p-8 rounded-[2rem] glass border border-border/40">

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Full Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="fullName"
                                placeholder="e.g. Victoria Sterling"
                                className={cn("pl-10 h-12 bg-background/50 border-border/40 rounded-xl focus:ring-[hsl(var(--gold))]", errors.fullName && "border-destructive")}
                                value={state.fullName}
                                onChange={(e) => updateState({ fullName: e.target.value })}
                            />
                        </div>
                        {errors.fullName && <p className="text-xs text-destructive ml-1">{errors.fullName}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="victoria@example.com"
                                    className={cn("pl-10 h-12 bg-background/50 border-border/40 rounded-xl focus:ring-[hsl(var(--gold))]", errors.email && "border-destructive")}
                                    value={state.email}
                                    onChange={(e) => updateState({ email: e.target.value })}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-destructive ml-1">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Phone Number</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="phone"
                                    placeholder="+1 (555) 000-0000"
                                    className={cn("pl-10 h-12 bg-background/50 border-border/40 rounded-xl focus:ring-[hsl(var(--gold))]", errors.phone && "border-destructive")}
                                    value={state.phone}
                                    onChange={(e) => updateState({ phone: e.target.value })}
                                />
                            </div>
                            {errors.phone && <p className="text-xs text-destructive ml-1">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="passengers" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Number of Passengers</Label>
                        <div className="relative">
                            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="passengers"
                                type="number"
                                min={1}
                                max={10}
                                className={cn("pl-10 h-12 bg-background/50 border-border/40 rounded-xl focus:ring-[hsl(var(--gold))]", errors.passengers && "border-destructive")}
                                value={state.passengers}
                                onChange={(e) => updateState({ passengers: parseInt(e.target.value) || 1 })}
                            />
                        </div>
                        {errors.passengers && <p className="text-xs text-destructive ml-1">{errors.passengers}</p>}
                    </div>

                    <div className="space-y-2 pt-2">
                        <Label htmlFor="notes" className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Special Requests (Optional)</Label>
                        <Textarea
                            id="notes"
                            placeholder="e.g. Champagne on ice, child seat required..."
                            className="bg-background/50 border-border/40 rounded-xl focus:ring-[hsl(var(--gold))] min-h-[100px]"
                            value={state.notes}
                            onChange={(e) => updateState({ notes: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border/40 max-w-4xl mx-auto">
                <Button variant="ghost" onClick={onPrev} className="w-full sm:w-auto rounded-xl">
                    <ChevronLeft className="h-5 w-5 mr-2" /> Vehicle Selection
                </Button>
                <Button
                    variant="luxury-gold"
                    size="xl"
                    onClick={handleNext}
                    className="w-full sm:w-auto rounded-2xl group px-8 sm:px-12"
                >
                    Review Reservation
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
