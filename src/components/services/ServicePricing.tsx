"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

interface ServicePricingProps {
    pricing: Service["pricing"];
    selectedAddons?: string[];
    onAddonToggle?: (name: string) => void;
    currentTotal?: number;
    hideButton?: boolean;
    onBook?: (addons: string[], total: number) => void;
}

export function ServicePricing({
    pricing,
    selectedAddons: propSelectedAddons,
    onAddonToggle,
    currentTotal,
    hideButton = false,
    onBook
}: ServicePricingProps) {
    // Parse base price number
    const parsePrice = (p: string) => parseInt(p.replace(/[^0-9]/g, "")) || 0;
    const basePriceValue = parsePrice(pricing.basePrice);

    // Internal state if not controlled
    const [localSelectedAddons, setLocalSelectedAddons] = useState<string[]>([]);

    const activeAddons = propSelectedAddons ?? localSelectedAddons;

    const handleToggle = (name: string) => {
        if (onAddonToggle) {
            onAddonToggle(name);
        } else {
            setLocalSelectedAddons(prev =>
                prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
            );
        }
    };

    const calculatedTotal = basePriceValue + activeAddons.reduce((acc, name) => {
        const addon = pricing.addons.find(a => a.name === name);
        return acc + (addon ? parsePrice(addon.price) : 0);
    }, 0);

    const displayTotal = currentTotal ?? calculatedTotal;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-2xl font-bold font-['Playfair_Display']">Pricing Overview</h3>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Base Price Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 dark:bg-white/5 dark:border-white/5 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Base Rate</p>
                            <h4 className="text-3xl font-bold text-[hsl(var(--gold))]">{pricing.basePrice}</h4>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[hsl(var(--gold))]/10 text-[hsl(var(--gold))] text-xs font-bold">
                            Standard
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/60">
                        Includes vehicle, professional chauffeur, and standard amenities.
                    </p>
                </div>

                {/* Addons Grid */}
                <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Optional Enhancements</p>
                    {pricing.addons.map((addon, i) => {
                        const isSelected = activeAddons.includes(addon.name);
                        const Icon = addon.icon;

                        return (
                            <motion.div
                                key={i}
                                layout
                                onClick={() => handleToggle(addon.name)}
                                className={cn(
                                    "flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300",
                                    isSelected
                                        ? "bg-[hsl(var(--gold))]/5 border-[hsl(var(--gold))] shadow-[0_0_15px_-5px_hsl(var(--gold))]"
                                        : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/5 hover:border-[hsl(var(--gold))]/50"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn(
                                        "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
                                        isSelected ? "bg-[hsl(var(--gold)) text-white" : "bg-slate-100 dark:bg-white/10"
                                    )}>
                                        {isSelected ? <Check className="w-3.5 h-3.5 text-black" /> : <Plus className="w-3.5 h-3.5 text-muted-foreground" />}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-4 h-4 text-[hsl(var(--gold))]" />
                                        <span className={cn("text-sm font-medium", isSelected ? "text-[hsl(var(--gold))]" : "text-foreground dark:text-white")}>
                                            {addon.name}
                                        </span>
                                    </div>
                                </div>
                                <span className="text-sm font-bold">{addon.price}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Total Estimation */}
            {/* Total Estimation */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-[#0a0a0a] dark:border-[hsl(var(--gold))]/20 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
                <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground dark:text-[#d4af37] font-bold">Estimated Total</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold font-['Playfair_Display'] text-[hsl(var(--gold))]">${displayTotal}</span>
                        <span className="text-muted-foreground text-sm">approx.</span>
                    </div>
                </div>
                {!hideButton && (
                    <Button
                        variant="luxury-gold"
                        className="w-full md:w-auto px-8"
                        onClick={() => onBook?.(activeAddons, displayTotal)}
                    >
                        Book for ${displayTotal}
                    </Button>
                )}
            </div>
        </div>
    );
}
