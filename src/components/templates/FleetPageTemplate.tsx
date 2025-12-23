import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingCTA } from "@/components/layout/MobileBookingCTA";
import { CTASection } from "@/components/sections/CTASection";
import { fleet, type FleetVehicle } from "@/data/fleet";
import { VehicleCard } from "@/components/cards/VehicleCard";
import Image from "next/image";

interface FleetPageTemplateProps {
    filterType?: "Sedan" | "SUV" | "Van";
    filterClass?: "executive" | "premium";
    title: string;
    description: string;
}

export function FleetPageTemplate({ filterType, filterClass, title, description }: FleetPageTemplateProps) {
    const filteredVehicles = fleet.filter((v) => {
        // Check type match
        if (filterType && v.type !== filterType) {
            return false;
        }

        // Check class match
        if (filterClass && v.class !== filterClass) {
            return false;
        }

        return true;
    });

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Simple Header */}
                <div className="pt-32 pb-16 bg-gradient-to-b from-background via-background/50 to-background">
                    <div className="luxury-container text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
                            {title}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Vehicles Grid */}
                <section className="pb-24">
                    <div className="luxury-container">
                        {filteredVehicles.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredVehicles.map((vehicle, i) => (
                                    <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-card/30 rounded-3xl border border-dashed border-border">
                                <p className="text-muted-foreground">Coming Soon to our Fleet</p>
                            </div>
                        )}
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}
