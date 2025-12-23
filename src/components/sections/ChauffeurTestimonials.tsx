"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function ChauffeurTestimonials() {
    return (
        <section className="section-padding bg-secondary/50 dark:bg-slate-950/40 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(var(--gold))]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

            <div className="luxury-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <p className="text-[hsl(var(--gold))] font-bold tracking-[0.2em] uppercase text-sm">Guest Experiences</p>
                            <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] leading-tight text-foreground">
                                Refined Journeys, <span className="text-gradient">Lasting Impressions</span>
                            </h2>
                        </div>

                        <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                            Our clients value the discretion, punctuality, and professionalism that defines the Luxe Drive experience. Hear from those who have traveled with our elite chauffeurs.
                        </p>

                        <div className="flex items-center gap-12 pt-4">
                            <div>
                                <p className="text-4xl font-bold font-['Playfair_Display'] mb-1 text-foreground">500+</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Global Clients</p>
                            </div>
                            <div className="w-px h-12 bg-border/40" />
                            <div>
                                <p className="text-4xl font-bold font-['Playfair_Display'] mb-1 text-foreground">4.9/5</p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-3 w-3 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        {testimonials.slice(0, 2).map((testimonial, i) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-[2rem] glass border border-border/40 relative group"
                            >
                                <Quote className="absolute top-6 right-8 h-12 w-12 text-[hsl(var(--gold))]/10 group-hover:text-[hsl(var(--gold))]/20 transition-colors" />

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[hsl(var(--gold))]/20">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            sizes="56px"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold font-['Playfair_Display'] text-lg text-foreground">{testimonial.name}</p>
                                        <p className="text-xs text-[hsl(var(--gold))] uppercase tracking-widest">{testimonial.role} • {testimonial.company}</p>
                                    </div>
                                </div>

                                <p className="text-muted-foreground italic leading-relaxed relative z-10">
                                    "{testimonial.content}"
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
