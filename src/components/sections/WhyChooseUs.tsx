"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  { icon: Shield, title: "Fully Insured", description: "Complete coverage for your peace of mind on every journey." },
  { icon: Clock, title: "Always Punctual", description: "We value your time with guaranteed on-time arrivals." },
  { icon: Award, title: "Premium Vehicles", description: "Luxury fleet maintained to the highest standards." },
  { icon: Users, title: "Professional Chauffeurs", description: "Vetted, trained, and dedicated to excellence." },
];

export function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding bg-card/30">
      <div className="luxury-container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <p className="text-[hsl(var(--silver))] font-medium mb-4 tracking-wider uppercase text-sm">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">The <span className="text-gradient">Luxe Drive</span> Difference</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="p-6 rounded-2xl glass border border-border/50 hover:border-[hsl(var(--silver))]/30 transition-all card-glow text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--silver))]/20 to-transparent mb-4">
                <item.icon className="h-7 w-7 text-[hsl(var(--silver))]" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-['Playfair_Display']">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}