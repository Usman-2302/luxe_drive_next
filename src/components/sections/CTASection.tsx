"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Evening city skyline seen through a luxury vehicle window"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/96 via-background/90 to-background/80 backdrop-blur-sm" />
      </div>
      <div className="luxury-container text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Playfair_Display'] mb-6">
            Ready to experience
            {" "}
            <span className="text-gradient">effortless arrivals?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Reserve your dedicated chauffeur in moments and enjoy a composed, perfectly timed journey
            for your next flight, board meeting, or private engagement.
          </p>
          <Button variant="luxury-gold" size="xl" asChild>
            <Link href="/booking">Book Your Chauffeur <ArrowRight className="h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}