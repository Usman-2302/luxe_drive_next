"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function MobileBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (roughly 500px)
      setIsVisible(window.scrollY > 500);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-card/95 backdrop-blur-xl border-t border-border/50 p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
              >
                <Phone className="h-5 w-5 text-foreground" />
              </a>
              <Button variant="luxury-gold" size="lg" className="flex-1" asChild>
                <Link href="/#booking">Book Your Chauffeur</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}