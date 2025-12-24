"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn(
        "p-6 rounded-2xl glass border border-border/50 h-full flex flex-col",
        "hover:border-[hsl(var(--silver))]/30 transition-all duration-300",
        className
      )}
    >
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground mb-6 leading-relaxed flex-1">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-[hsl(var(--silver))]/20">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}