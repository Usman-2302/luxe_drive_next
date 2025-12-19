"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingCTA } from "@/components/layout/MobileBookingCTA";
import { FleetGallery } from "@/components/sections/FleetGallery";

export default function Fleet() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <section className="pt-32 pb-16 luxury-container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] mb-6">
                            Our <span className="text-gradient">Luxury Fleet</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
                            A curated selection of the world's finest automobiles, from executive sedans to spacious SUVs,
                            all maintained to the highest standards of safety and luxury.
                        </p>
                    </motion.div>
                </section>
                <FleetGallery />
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}
