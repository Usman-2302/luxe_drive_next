"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Sparkles, UserCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

const values = [
    {
        icon: Shield,
        title: "Uncompromising Safety",
        description: "Our protocols exceed industry standards, ensuring your peace of mind on every journey."
    },
    {
        icon: UserCheck,
        title: "Absolute Discretion",
        description: "We protect your privacy with the same rigor as we protect your physical safety."
    },
    {
        icon: Sparkles,
        title: "Pursuit of Excellence",
        description: "Good is not enough. We strive for perfection in every detail of the service experience."
    }
];

const jobs = [
    {
        title: "Executive Chauffeur",
        type: "Full-Time",
        location: "New York, NY",
        description: "Serve our elite clientele with professionalism, navigating the city's streets with precision and grace."
    },
    {
        title: "Lifestyle Concierge",
        type: "Part-Time",
        location: "Remote / Hybrid",
        description: "Curate exceptional experiences and manage complex itineraries for our most discerning members."
    }
];

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-background dark:bg-[#050505] text-foreground dark:text-white selection:bg-[hsl(var(--gold))]/30">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/chauffeur-hero.jpg"
                            alt="Chauffeur opening door"
                            fill
                            className="object-cover opacity-60 dark:opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background dark:to-[#050505]" />
                    </div>

                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] mb-4 text-white">
                                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[#fff8dc]">Elite</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
                                Defining the standard of luxury travel.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-24 luxury-container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-2xl bg-white shadow-sm border border-slate-200 dark:bg-white/5 dark:backdrop-blur-md dark:border-[hsl(var(--gold))]/20 hover:border-[hsl(var(--gold))]/40 transition-colors group"
                            >
                                <div className="h-12 w-12 rounded-full bg-[hsl(var(--gold))]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="h-6 w-6 text-[hsl(var(--gold))]" />
                                </div>
                                <h3 className="text-xl font-bold font-['Playfair_Display'] mb-3 text-foreground dark:text-white">{value.title}</h3>
                                <p className="text-muted-foreground dark:text-white/60 leading-relaxed text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Job Listings */}
                <section className="py-24 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5">
                    <div className="luxury-container max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-foreground dark:text-white">Current Opportunities</h2>
                        </div>

                        <div className="space-y-6">
                            {jobs.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl bg-white border border-slate-200 dark:bg-[#0a0a0a] dark:border-white/5 hover:border-[hsl(var(--gold))]/30 transition-all group shadow-sm dark:shadow-none"
                                >
                                    <div className="mb-6 md:mb-0 text-center md:text-left">
                                        <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-2 text-foreground dark:text-white">{job.title}</h3>
                                        <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground dark:text-white/50">
                                            <span>{job.type}</span>
                                            <span className="w-1 h-1 rounded-full bg-[hsl(var(--gold))]" />
                                            <span>{job.location}</span>
                                        </div>
                                        <p className="mt-4 text-muted-foreground dark:text-white/70 max-w-md">{job.description}</p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="border-[hsl(var(--gold))] text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))] hover:text-white rounded-lg px-8 h-12"
                                    >
                                        Apply Now
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
