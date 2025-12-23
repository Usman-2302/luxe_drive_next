"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, Wifi, Droplets, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FleetVehicle } from "@/data/fleet";

import { useRouter } from "next/navigation";
import Image from "next/image";

// Placeholder blur data (very small base64 pixel)
const BLUR_PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

interface VehicleCardProps {
  vehicle: FleetVehicle;
  index: number;
  onBook?: (vehicle: FleetVehicle) => void;
}

const amenityIcons: Record<string, typeof Wifi> = {
  WiFi: Wifi,
  Water: Droplets,
  "Leather seats": Sparkles,
};

export function VehicleCard({ vehicle, index, onBook }: VehicleCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className={cn(
          "relative overflow-hidden rounded-2xl glass",
          "border border-border/40 hover:border-[hsl(var(--silver))]/40",
          "transition-all duration-300 card-glow"
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            className="w-full h-full"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              quality={80}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          {/* Class Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                vehicle.class === "premium"
                  ? "bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--champagne))] text-background"
                  : "bg-[hsl(var(--silver))]/20 text-[hsl(var(--silver))] backdrop-blur-sm"
              )}
            >
              {vehicle.class}
            </span>
          </div>

          {/* Capacity & Luggage */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
              <Users className="h-3 w-3" />
              {vehicle.seats}
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs">
              <Briefcase className="h-3 w-3" />
              {vehicle.luggage}
            </div>
          </div>

          {/* Amenities Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center p-6"
              >
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Features</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {vehicle.features.slice(0, 4).map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-accent text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-bold font-['Playfair_Display']">
                {vehicle.name}
              </h3>
              <p className="text-sm text-muted-foreground capitalize">
                {vehicle.type}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">From</p>
              <p className="text-xl font-bold text-gradient">
                ${vehicle.price}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {vehicle.description}
          </p>

          {/* Book Button */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <Button
                  variant="luxury-gold"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    if (onBook) {
                      onBook(vehicle);
                    } else {
                      router.push(`/booking?vehicle=${vehicle.id}`);
                    }
                  }}
                >
                  Book Now
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}