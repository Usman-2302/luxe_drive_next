import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FleetSection } from "@/components/sections/FleetSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { BrandedLoader } from "@/components/ui/branded-loader";

const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(mod => mod.TestimonialsSection));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => mod.FAQSection));
const CTASection = dynamic(() => import("@/components/sections/CTASection").then(mod => mod.CTASection));
const MobileBookingCTA = dynamic(() => import("@/components/layout/MobileBookingCTA").then(mod => mod.MobileBookingCTA));

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection />
                <WhyChooseUs />
                <ServicesSection />
                <FleetSection />
                <VideoShowcase />
                <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><BrandedLoader /></div>}>
                    <TestimonialsSection />
                </Suspense>
                <Suspense fallback={<div className="min-h-[300px]" />}>
                    <FAQSection />
                </Suspense>
                <Suspense fallback={<div className="min-h-[200px]" />}>
                    <CTASection />
                </Suspense>
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}
