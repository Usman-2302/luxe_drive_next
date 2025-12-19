import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingCTA } from "@/components/layout/MobileBookingCTA";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Services() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">
                <ServicesSection />
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}
