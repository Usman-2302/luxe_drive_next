"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingSteps } from "@/components/booking/BookingSteps";
import { BookingProvider } from "@/components/booking/BookingContext";
import { motion } from "framer-motion";

export default function BookingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:bg-[radial-gradient(ellipse_at_center,_#111111_0%,_#0a0a0a_100%)]">
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="luxury-container">
                    <BookingProvider>
                        <BookingSteps />
                    </BookingProvider>
                </div>
            </main>
            <Footer />
        </div>
    );
}
