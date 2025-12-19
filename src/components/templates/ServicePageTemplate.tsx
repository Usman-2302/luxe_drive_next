"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingCTA } from "@/components/layout/MobileBookingCTA";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ServiceType } from "@/components/booking/BookingContext";

interface ServicePageTemplateProps {
    slug: string;
}

const serviceTypeMap: Record<string, ServiceType> = {
    "airport-transfers": "airport",
    "hotel-transfers": "hotel",
    "corporate-travel": "corporate",
    "wedding-services": "wedding",
    "city-tours": "tour"
};

export function ServicePageTemplate({ slug }: ServicePageTemplateProps) {
    const service = services.find((s) => s.id === slug);

    if (!service) {
        return <div className="min-h-screen flex items-center justify-center">Service not found</div>;
    }

    const bookingType = serviceTypeMap[slug] || "corporate";

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                    <div className="luxury-container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Playfair_Display'] text-white mb-6">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Booking & Info Section */}
                <section className="py-24 luxury-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Content side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-6 capitalize">
                                    Our {service.title} Philosophy
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg italic">
                                    "Experience a journey defined by punctuality, privacy, and the pinnacle of automotive excellence. We don't just transport; we curate your arrival."
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-[hsl(var(--gold))]" /> Timings
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Available 24/7 for pre-booked journeys.
                                        Minimum 4 hours notice required for guaranteed availability.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <Phone className="h-5 w-5 text-[hsl(var(--gold))]" /> Support
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Dedicated concierge line: +1 (234) 567-890<br />
                                        Priority support for active journeys.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">What's Included</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-[hsl(var(--gold))]" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA side */}
                        <div id="booking-cta" className="lg:sticky lg:top-32 scroll-mt-32">
                            <div className="p-10 rounded-[3rem] glass border border-[hsl(var(--gold))]/20 shadow-2xl space-y-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold))]/5 to-transparent pointer-events-none" />

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold font-['Playfair_Display']">Reserve this <span className="text-gradient">Experience</span></h3>
                                    <p className="text-muted-foreground font-light leading-relaxed">
                                        Personalize your {service.title.toLowerCase()} with our elite fleet and master chauffeurs.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--gold))] animate-pulse" />
                                        <span>Guaranteed Availability</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--gold))] animate-pulse" delay-100="" />
                                        <span>Protocol-Certified Drivers</span>
                                    </div>
                                </div>

                                <Button
                                    variant="luxury-gold"
                                    size="xl"
                                    className="w-full rounded-[1.5rem] h-16 group"
                                    asChild
                                >
                                    <Link href={`/booking?service=${bookingType}`}>
                                        Begin Reservation
                                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>

                                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                                    Instant Confirmation Available
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <CTASection />
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}
