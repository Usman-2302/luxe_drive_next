"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingCTA } from "@/components/layout/MobileBookingCTA";
import { ChauffeurHero } from "@/components/sections/ChauffeurHero";
import { ChauffeursGrid } from "@/components/sections/ChauffeursGrid";
import { ChauffeurTestimonials } from "@/components/sections/ChauffeurTestimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";

export default function ChauffeursPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <ChauffeurHero />

                <div className="relative">
                    {/* Main Grid */}
                    <ChauffeursGrid />
                </div>

                <WhyChooseUs />
                <ChauffeurTestimonials />
                <CTASection />
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}
