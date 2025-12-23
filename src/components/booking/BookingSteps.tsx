"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useBooking, ServiceType } from "./BookingContext";

const StepServiceSelection = dynamic(() => import("./StepServiceSelection").then(mod => mod.StepServiceSelection));
const StepSelection = dynamic(() => import("./StepSelection").then(mod => mod.StepSelection));
const StepPassengerDetails = dynamic(() => import("./StepPassengerDetails").then(mod => mod.StepPassengerDetails));
const StepSummary = dynamic(() => import("./StepSummary").then(mod => mod.StepSummary));
import { cn } from "@/lib/utils";
import { Check, ChevronLeft, Briefcase, Car, MapPin, ClipboardList, User } from "lucide-react";

const STEPS = [
    { id: 1, title: "Plan", icon: MapPin },
    { id: 2, title: "Select", icon: Car },
    { id: 3, title: "Details", icon: User },
    { id: 4, title: "Confirm", icon: ClipboardList },
];

export function BookingSteps() {
    const searchParams = useSearchParams();
    const { state, updateState, isInitialized } = useBooking();
    const [currentStep, setCurrentStep] = useState(1);

    // Sync query params once on mount (wait for hydration)
    useEffect(() => {
        if (!isInitialized) return;

        const service = searchParams.get("service") as ServiceType;
        const vehicle = searchParams.get("vehicle");
        const chauffeur = searchParams.get("chauffeur");

        if (service || vehicle || chauffeur) {
            updateState({
                ...(service && { serviceId: service }),
                ...(vehicle && { vehicleId: vehicle }),
                ...(chauffeur && { chauffeurId: chauffeur }),
            });
        }
    }, [isInitialized, searchParams, updateState]);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <StepServiceSelection onNext={nextStep} />;
            case 2:
                // StepSelection (Vehicle) usually goes back to Service
                return <StepSelection onNext={nextStep} onPrev={prevStep} />;
            case 3:
                // New Passenger Step
                return <StepPassengerDetails onNext={nextStep} onPrev={prevStep} />;
            case 4:
                return <StepSummary onPrev={prevStep} />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Step Indicator */}
            <div className="mb-12 relative flex justify-between">
                <div className="absolute top-5 left-0 w-full h-0.5 bg-accent/30 -z-0" />
                <motion.div
                    initial={false}
                    animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                    className="absolute top-5 left-0 h-0.5 bg-[hsl(var(--gold))] -z-0 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                />

                {STEPS.map((step) => {
                    const Icon = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = currentStep > step.id;

                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center">
                            <motion.div
                                animate={{
                                    backgroundColor: isCompleted || isActive ? "hsl(var(--gold))" : "hsl(var(--accent))",
                                    scale: isActive ? 1.1 : 1,
                                }}
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all",
                                    isCompleted || isActive ? "border-[hsl(var(--gold))]" : "border-border/40"
                                )}
                            >
                                {isCompleted ? (
                                    <Check className="h-5 w-5 text-slate-950" />
                                ) : (
                                    <Icon className={cn("h-4 w-4", isActive ? "text-slate-950" : "text-muted-foreground")} />
                                )}
                            </motion.div>
                            <span className={cn(
                                "mt-2 text-[10px] font-bold uppercase tracking-widest hidden md:block",
                                isActive ? "text-[hsl(var(--gold))]" : "text-muted-foreground"
                            )}>
                                {step.title}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Step Content */}
            <div className="relative overflow-hidden min-h-[500px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {renderCurrentStep()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
