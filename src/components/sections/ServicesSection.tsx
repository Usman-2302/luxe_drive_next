"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="section-padding">
      <div className="luxury-container">
        <motion.div style={{ y }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[hsl(var(--silver))] font-medium mb-4 tracking-wider uppercase text-sm">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">Premium <span className="text-gradient">Chauffeur Services</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (<ServiceCard key={service.id} service={service} index={i} />))}
        </div>
      </div>
    </section>
  );
}