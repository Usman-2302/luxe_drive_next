"use client";

import { BookingProvider } from "@/components/booking/BookingContext";
import { BookingSteps } from "@/components/booking/BookingSteps";

export default function BookingPage() {
    return (
        <BookingProvider>
            <main className="min-h-screen bg-background pt-24 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

                <div className="luxury-container relative z-10">
                    <div className="text-center mb-12 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display']">Secure Your <span className="text-gradient">Journey</span></h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Experience the pinnacle of luxury transportation. Follow the steps below to customize your service.
                        </p>
                    </div>

                    <BookingSteps />
                </div>
            </main>
        </BookingProvider>
    );
}
