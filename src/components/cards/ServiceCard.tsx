"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/services/${service.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className={cn(
            "group relative h-full p-6 rounded-2xl card-glow transition-all duration-300",
            "glass border border-border/40 hover:border-[hsl(var(--silver))]/40", // Light Theme
            "dark:glass-none dark:border-white/5 dark:hover:border-white/10", // Dark Theme border
            index % 2 === 0 ? "bg-white dark:bg-[#0f0f0f]" : "bg-slate-50/50 dark:bg-[#181818]"
          )}
        >
          {/* Icon */}
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-[hsl(var(--gold))]/20 blur-xl opacity-50 rounded-full" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--silver))]/10 to-transparent border border-white/5"
            >
              <Icon className="h-7 w-7 text-[hsl(var(--silver))]" />
            </motion.div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold mb-2 font-['Playfair_Display'] group-hover:text-gradient transition-all">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--silver))]" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Link */}
          <div className="flex items-center gap-2 text-sm font-medium text-[hsl(var(--silver))] group-hover:text-foreground transition-colors">
            Learn More
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="inline-block"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--silver))]/5 to-transparent" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}