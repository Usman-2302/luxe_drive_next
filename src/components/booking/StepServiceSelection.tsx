"use client";

import React from "react";
import { motion } from "framer-motion";
import { useBooking, ServiceType } from "./BookingContext";
import { Plane, Hotel, Briefcase, Heart, MapPin, ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { services } from "@/data/services";
import { ServicePricing } from "@/components/services/ServicePricing";

const SERVICES = [
    { id: "airport", title: "Airport Transfer", icon: Plane, desc: "Punctual arrivals and stress-free terminal transfers." },
    { id: "hotel", title: "Hotel Transfer", icon: Hotel, desc: "Seamless door-to-door service between your stay and destinations." },
    { id: "corporate", title: "Corporate Travel", icon: Briefcase, desc: "Professional transportation for executive roadshows and meetings." },
    { id: "wedding", title: "Wedding Events", icon: Heart, desc: "Elegant arrivals for your most significant life milestone." },
    { id: "tour", title: "City Tours", icon: MapPin, desc: "Explore the city's landmarks in absolute comfort and privacy." },
] as const;

const SERVICE_ID_MAP: Record<string, string> = {
    "airport": "airport-transfers",
    "hotel": "hotel-transfers",
    "corporate": "corporate-travel",
    "wedding": "wedding-services",
    "tour": "city-tours"
};

export function StepServiceSelection({ onNext }: { onNext: () => void }) {
    const { state, updateState } = useBooking();

    const handleSelect = (id: ServiceType) => {
        updateState({ serviceId: id, selectedAddons: [] }); // Reset addons on change
    };

    const selectedServiceData = state.serviceId ? services.find(s => s.id === SERVICE_ID_MAP[state.serviceId]) : null;

    // Calculate total for ServicePricing to display correctly if controlled
    const parsePrice = (p: string) => parseInt(p.replace(/[^0-9]/g, "")) || 0;
    const basePrice = selectedServiceData ? parsePrice(selectedServiceData.pricing.basePrice) : 0;

    // We can rely on ServicePricing to calculate, but we need to pass back the total to update context
    // Actually ServicePricing calculates it internally based on props. 
    // We should update the context whenever addons change.

    const generateTimeSlots = (selectedDate: string | undefined): string[] => {
        const slots: string[] = [];
        const now = new Date();
        const isToday = selectedDate === now.toISOString().split('T')[0];

        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += 15) {
                if (isToday) {
                    const currH = now.getHours();
                    const currM = now.getMinutes();
                    // If time is in the past (roughly), skip. Add buffer if needed.
                    // Simple check: h must be > current, or same hour and m > current
                    if (h < currH || (h === currH && m < currM)) continue;
                }
                const timeString = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
                slots.push(timeString);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots(state.date);

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
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
                                ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 shadow-[0_4px_20px_-5px_rgba(212,175,55,0.15)]"
                                : "border-border/40 hover:border-[hsl(var(--gold))]/40 hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.1)]"
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

            {/* Pricing Overview Section */}
            {selectedServiceData && (
                <div className="max-w-4xl mx-auto">
                    <ServicePricing
                        pricing={selectedServiceData.pricing}
                        hideButton={true}
                        selectedAddons={state.selectedAddons || []}
                        onAddonToggle={(name) => {
                            const current = state.selectedAddons || [];
                            const newAddons = current.includes(name)
                                ? current.filter(n => n !== name)
                                : [...current, name];

                            // Recalculate total immediately to store in state
                            const total = basePrice + newAddons.reduce((acc, addonName) => {
                                const addon = selectedServiceData.pricing.addons.find(a => a.name === addonName);
                                return acc + (addon ? parsePrice(addon.price) : 0);
                            }, 0);

                            updateState({ selectedAddons: newAddons, quotedPrice: total });
                        }}
                        currentTotal={state.quotedPrice || basePrice} // Ensure we show updated price
                    />
                </div>
            )}

            {/* Logistics Form */}
            <div className="max-w-4xl mx-auto space-y-6 pt-8 border-t border-border/40 px-2">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold font-['Playfair_Display']">Journey <span className="text-gradient">Details</span></h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Pick-up Location</label>
                            <input
                                type="text"
                                placeholder="e.g. JFK Airport Terminal 4"
                                className="w-full max-w-full h-12 px-4 rounded-xl bg-background/50 border border-border/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]/50 transition-all box-border"
                                value={state.pickup}
                                onChange={(e) => updateState({ pickup: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Destination</label>
                            <input
                                type="text"
                                placeholder="e.g. The Plaza Hotel"
                                className="w-full max-w-full h-12 px-4 rounded-xl bg-background/50 border border-border/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--gold))]/50 transition-all box-border"
                                value={state.destination}
                                onChange={(e) => updateState({ destination: e.target.value })}
                            />
                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Date</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full h-12 px-4 text-left font-normal rounded-xl bg-background/50 border-border/40 hover:bg-background/80 hover:border-[hsl(var(--gold))]/50 transition-all",
                                            !state.date && "text-muted-foreground"
                                        )}
                                    >
                                        {state.date ? (
                                            format(new Date(state.date.endsWith('Z') ? state.date : state.date + 'T12:00:00'), "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={state.date ? new Date(state.date.endsWith('Z') ? state.date : state.date + 'T12:00:00') : undefined}
                                        onSelect={(date) => updateState({ date: date ? format(date, "yyyy-MM-dd") : "" })}
                                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                        initialFocus
                                        className="bg-background border-border/40"
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Time</label>
                            <Select
                                value={state.time}
                                onValueChange={(value: string) => updateState({ time: value })}
                                disabled={!state.date}
                            >
                                <SelectTrigger className="w-full h-12 px-4 rounded-xl bg-background/50 border-border/40 hover:bg-background/80 hover:border-[hsl(var(--gold))]/50 transition-all">
                                    <div className="flex items-center gap-2 w-full">
                                        <SelectValue placeholder="Select time" />
                                        <Clock className="ml-auto h-4 w-4 opacity-50" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="max-h-[300px] bg-background/95 backdrop-blur-xl border-border/40">
                                    {timeSlots.length > 0 ? (
                                        timeSlots.map((time) => (
                                            <SelectItem key={time} value={time} className="cursor-pointer focus:bg-[hsl(var(--gold))]/10 focus:text-[hsl(var(--gold))]">
                                                {time}
                                            </SelectItem>
                                        ))
                                    ) : (
                                        <div className="p-4 text-sm text-center text-muted-foreground">
                                            No slots available for today
                                        </div>
                                    )}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-8 p-4">
                <Button
                    variant="luxury-gold"
                    size="xl"
                    disabled={!state.serviceId || !state.pickup || !state.destination || !state.date || !state.time}
                    onClick={onNext}
                    className="w-full sm:w-auto rounded-2xl px-4 sm:px-12 group"
                >
                    Continue to Vehicle Selection
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
        </div>
    );
}
