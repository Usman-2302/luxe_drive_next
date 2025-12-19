"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VehicleCard } from "@/components/cards/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { Button } from "@/components/ui/button";

export function FleetSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card/30">
      <div className="luxury-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[hsl(var(--silver))] font-medium mb-4 tracking-wider uppercase text-sm">Our Fleet</p>
            <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">Premium <span className="text-gradient">Luxury Vehicles</span></h2>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")}><ChevronLeft className="h-5 w-5" /></Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")}><ChevronRight className="h-5 w-5" /></Button>
          </div>
        </motion.div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x">
          {vehicles.map((vehicle, i) => (
            <div key={vehicle.id} className="min-w-[320px] snap-start"><VehicleCard vehicle={vehicle} index={i} /></div>
          ))}
        </div>
      </div>
    </section>
  );
}