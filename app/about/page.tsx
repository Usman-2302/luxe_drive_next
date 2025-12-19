"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingCTA } from "@/components/layout/MobileBookingCTA";
import { motion } from "framer-motion";
import { Shield, Clock, Star, Users, Car, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-slate-950">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[hsl(var(--gold))]/10 via-transparent to-transparent" />
                    </div>
                    <div className="luxury-container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-8 leading-tight">
                                The Art of the <br />
                                <span className="text-gradient">Journey</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                                Redefining luxury ground transportation through precision, privacy, and an unwavering commitment to excellence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Philosophy */}
                <section className="py-24 md:py-32 border-y border-border/40">
                    <div className="luxury-container">
                        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
                            {[
                                {
                                    title: "Discretion",
                                    desc: "Absolute privacy is the cornerstone of our service. We provide a sanctuary where you can conduct business or find repose in total confidence.",
                                    icon: Shield
                                },
                                {
                                    title: "Punctuality",
                                    desc: "Time is your most precious asset. Our systems and chauffeurs operate with absolute precision to ensure you are never kept waiting.",
                                    icon: Clock
                                },
                                {
                                    title: "Tailored Experience",
                                    desc: "No two journeys are alike. We curate every detail of your transport to align with your personal preferences and professional requirements.",
                                    icon: Star
                                }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="flex flex-col items-center text-center space-y-6"
                                >
                                    <div className="h-16 w-16 rounded-2xl bg-[hsl(var(--gold))]/5 flex items-center justify-center border border-[hsl(var(--gold))]/20">
                                        <pillar.icon className="h-8 w-8 text-[hsl(var(--gold))]" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-['Playfair_Display']">{pillar.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed font-light">
                                        {pillar.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* What Sets Us Apart */}
                <section className="py-24 md:py-32">
                    <div className="luxury-container">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display']">What Sets Us <br /><span className="text-gradient">Apart</span></h2>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                    Our reputation is built on the details that others overlook. From the precise calibration of our vehicles to the rigorous selection of our personnel, we leave nothing to chance.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        "Rigorous Chauffeur Training",
                                        "Curated & Maintained Fleet",
                                        "Uncompromising Privacy",
                                        "Seamless Global Consistency"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 group">
                                            <CheckCircle2 className="h-5 w-5 text-[hsl(var(--gold))] shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-medium tracking-wide italic">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&fit=crop"
                                        alt="Luxury Vehicle Detail"
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[3s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                </div>
                                <div className="absolute -bottom-8 -left-8 p-8 glass rounded-[2rem] border-white/10 hidden xl:block">
                                    <p className="text-3xl font-bold font-['Playfair_Display'] mb-1">100%</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--gold))]">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Chauffeurs */}
                <section className="py-24 md:py-32 bg-slate-950/50 relative">
                    <div className="luxury-container relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display']">Mastery Behind the <span className="text-gradient">Wheel</span></h2>
                                <div className="h-px w-24 bg-[hsl(var(--gold))]/40 mx-auto mt-6" />
                            </div>
                            <div className="prose prose-invert max-w-none">
                                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed italic">
                                    "A Luxe Drive chauffeur is more than a driver; they are a protocol-certified professional trained in the fine art of service. Each member of our team undergoes extensive background vetting and defensive driving certification, ensuring that your safety and comfort are never compromised."
                                </p>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed mt-8">
                                    Beyond their technical mastery of the road, our chauffeurs are masters of etiquette and discretion. They possess an intimate knowledge of the cities they serve, allowing them to navigate complex routes with effortless grace.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fleet Ethos */}
                <section className="py-24 md:py-32">
                    <div className="luxury-container">
                        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                            <div className="flex-1 space-y-8">
                                <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display']">The Fleet <br /><span className="text-gradient">Ethos</span></h2>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                    Our collection of vehicles is not merely a list of premium models; it is a curated selection of automotive excellence. We choose vehicles that offer the perfect balance of serenity, space, and understated elegance.
                                </p>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                    Every vehicle in our fleet is maintained to a standard beyond factory specifications, ensuring that the whisper-quiet cabin and smooth ride quality remain consistent across every journey.
                                </p>
                            </div>
                            <div className="flex-1 relative">
                                <div className="aspect-[16/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&fit=crop"
                                        alt="Luxury Fleet"
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[3s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who We Serve */}
                <section className="py-24 md:py-32 border-t border-border/40">
                    <div className="luxury-container">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                            <h2 className="text-4xl font-bold font-['Playfair_Display'] italic text-gradient">Tailored for the Discerning</h2>
                            <p className="text-muted-foreground font-light">Serving those who value precision and privacy above all else.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { title: "Executives", desc: "Seamless corporate logistics" },
                                { title: "Travelers", desc: "Stress-free airport arrivals" },
                                { title: "Private Clients", desc: "Discreet personal transport" },
                                { title: "Events", desc: "Sophisticated group arrivals" }
                            ].map((segment, i) => (
                                <div key={i} className="space-y-2 p-6 rounded-2xl bg-accent/30 border border-border/40 text-center">
                                    <h4 className="font-bold text-foreground">{segment.title}</h4>
                                    <p className="text-xs text-muted-foreground font-medium">{segment.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing Statement */}
                <section className="py-32 md:py-48 text-center bg-slate-950 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[hsl(var(--gold))]/20 via-transparent to-transparent" />
                    </div>
                    <div className="luxury-container relative z-10 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto space-y-8"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] leading-tight">
                                Your arrival, <br />
                                <span className="text-gradient font-italic animate-pulse">perfectly composed.</span>
                            </h2>
                            <div className="h-px w-32 bg-[hsl(var(--gold))]/40 mx-auto" />
                            <p className="text-xl text-muted-foreground font-light">
                                Experience the standard of luxury transport that redefined the industry.
                            </p>
                            <div className="pt-4">
                                <Button variant="luxury-gold" size="xl" className="rounded-2xl px-12 group" asChild>
                                    <Link href="/services">
                                        Explore Our Services
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}
