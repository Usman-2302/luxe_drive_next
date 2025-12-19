"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="luxury-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[hsl(var(--silver))] font-medium mb-4 tracking-wider uppercase text-sm">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">What Our <span className="text-gradient">Clients Say</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}