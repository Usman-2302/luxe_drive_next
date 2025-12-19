"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { ChauffeurCard } from "@/components/cards/ChauffeurCard";
import { chauffeurs, Chauffeur } from "@/data/chauffeurs";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ChauffeursGrid() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");

    const specialties = useMemo(() => {
        const allSpecs = chauffeurs.flatMap(c => c.specialties);
        return ["All", ...Array.from(new Set(allSpecs))];
    }, []);

    const filteredChauffeurs = useMemo(() => {
        return chauffeurs.filter(c => {
            const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.role.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesSpecialty = selectedSpecialty === "All" || c.specialties.includes(selectedSpecialty);
            return matchesSearch && matchesSpecialty;
        });
    }, [searchQuery, selectedSpecialty]);

    return (
        <section className="py-24 luxury-container">
            {/* Search and Filter Bar */}
            <div className="mb-16 space-y-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="relative w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search by name or role..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-11 h-14 rounded-2xl glass border-border/40 focus:border-[hsl(var(--gold))]/40"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <Filter className="h-4 w-4 text-muted-foreground shrink-0 mr-2" />
                        {specialties.map((spec) => (
                            <button
                                key={spec}
                                onClick={() => setSelectedSpecialty(spec)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border",
                                    selectedSpecialty === spec
                                        ? "bg-[hsl(var(--gold))] text-slate-950 border-[hsl(var(--gold))]"
                                        : "bg-accent/30 text-muted-foreground border-border/40 hover:border-[hsl(var(--gold))]/30"
                                )}
                            >
                                {spec}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Filters Display */}
                {selectedSpecialty !== "All" && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Active Filter:</span>
                        <button
                            onClick={() => setSelectedSpecialty("All")}
                            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--gold))]/10 border border-[hsl(var(--gold))]/20 text-[hsl(var(--gold))] text-xs font-bold"
                        >
                            {selectedSpecialty}
                            <X className="h-3 w-3" />
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredChauffeurs.map((chauffeur, index) => (
                        <motion.div
                            key={chauffeur.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChauffeurCard
                                chauffeur={chauffeur}
                                index={index}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredChauffeurs.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-24"
                >
                    <p className="text-xl text-muted-foreground font-light">
                        No chauffeurs found matching your criteria.
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setSelectedSpecialty("All");
                        }}
                        className="mt-4 text-[hsl(var(--gold))] font-medium underline-offset-4 hover:underline"
                    >
                        Clear all filters
                    </button>
                </motion.div>
            )}
        </section>
    );
}
