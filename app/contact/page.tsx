"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookingCTA } from "@/components/layout/MobileBookingCTA";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, ShieldCheck, Clock, Shield, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createContactRequest, ContactPayload } from "@/lib/contactService";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState<Omit<ContactPayload, 'createdAt' | 'status'>>({
        firstName: '',
        lastName: '',
        email: '',
        reason: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, reason: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        try {
            await createContactRequest(formData);
            setStatus('success');
            toast({
                title: "Message Sent",
                description: "Our concierge team will respond shortly.",
            });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                reason: '',
                message: ''
            });
        } catch (error) {
            console.error("Contact submission failed", error);
            setStatus('error');
            toast({
                title: "Submission Failed",
                description: "Please try again or contact us directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 bg-slate-950">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
                    </div>
                    <div className="luxury-container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl mx-auto space-y-6"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold font-['Playfair_Display'] leading-tight">
                                Concierge <span className="text-gradient">Assistance</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                                Our dedicated assistance team is available 24/7 to curate your journey and address your specific requirements with absolute discretion.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-24 luxury-container">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold font-['Playfair_Display']">Request Assistance</h2>
                                <p className="text-sm text-muted-foreground font-light">Please allow us to understand how we may best serve you.</p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">First Name</label>
                                        <Input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder="E.g. Alexander"
                                            className="h-12 bg-accent/20 border-border/40 focus:border-[hsl(var(--gold))]/40 rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Last Name</label>
                                        <Input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder="E.g. Sterling"
                                            className="h-12 bg-accent/20 border-border/40 focus:border-[hsl(var(--gold))]/40 rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Email Address</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="alex@example.com"
                                        className="h-12 bg-accent/20 border-border/40 focus:border-[hsl(var(--gold))]/40 rounded-xl"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Reason for Inquiry</label>
                                    <Select value={formData.reason} onValueChange={handleSelectChange} required>
                                        <SelectTrigger className="h-12 bg-accent/20 border-border/40 focus:border-[hsl(var(--gold))]/40 rounded-xl">
                                            <SelectValue placeholder="Select a purpose" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">General Inquiry</SelectItem>
                                            <SelectItem value="corporate">Corporate Account</SelectItem>
                                            <SelectItem value="event">Event Logistics</SelectItem>
                                            <SelectItem value="support">Active Journey Support</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-2">Message</label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Briefly describe your requirements..."
                                        className="min-h-[150px] bg-accent/20 border-border/40 focus:border-[hsl(var(--gold))]/40 rounded-2xl resize-none"
                                    />
                                </div>

                                <div className="pt-4 flex flex-col items-center gap-4">
                                    <Button
                                        type="submit"
                                        variant="luxury-gold"
                                        size="xl"
                                        disabled={isSubmitting}
                                        className="w-full rounded-2xl h-16 group"
                                    >
                                        {isSubmitting ? "Processing Request..." : "Request Assistance"}
                                        {!isSubmitting ? (
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        ) : (
                                            <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                                        )}
                                    </Button>
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
                                        <Shield className="h-3 w-3" /> Encrypted & Private Submission
                                    </p>
                                    {status === 'success' && (
                                        <p className="text-sm text-green-600 font-medium">Message transmitted. We will respond shortly.</p>
                                    )}
                                </div>
                            </form>
                        </motion.div>

                        {/* Concierge Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12 lg:pl-12 lg:border-l border-border/40"
                        >
                            {/* Contact Block */}
                            <div className="space-y-8">
                                <h3 className="text-2xl font-bold font-['Playfair_Display']">Concierge Contact</h3>

                                <div className="space-y-6">
                                    <a href="tel:+1234567890" className="flex items-start gap-5 group">
                                        <div className="h-12 w-12 rounded-xl bg-[hsl(var(--gold))]/5 border border-[hsl(var(--gold))]/20 flex items-center justify-center group-hover:bg-[hsl(var(--gold))]/10 transition-colors">
                                            <Phone className="h-5 w-5 text-[hsl(var(--gold))]" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Priority Line</p>
                                            <p className="text-lg font-medium">+1 (234) 567-890</p>
                                        </div>
                                    </a>

                                    <a href="mailto:concierge@luxedrive.com" className="flex items-start gap-5 group">
                                        <div className="h-12 w-12 rounded-xl bg-[hsl(var(--gold))]/5 border border-[hsl(var(--gold))]/20 flex items-center justify-center group-hover:bg-[hsl(var(--gold))]/10 transition-colors">
                                            <Mail className="h-5 w-5 text-[hsl(var(--gold))]" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Strategic Inbox</p>
                                            <p className="text-lg font-medium">concierge@luxedrive.com</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Service Regions */}
                            <div className="space-y-6">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-b border-border/40 pb-2">Active Service Regions</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        "Greater London", "New York Tri-State", "Paris & Île-de-France", "Dubai Central", "Singapore City", "Tokyo Prefecture"
                                    ].map((region, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                            <Globe className="h-3.5 w-3.5 text-[hsl(var(--gold))] opacity-50" />
                                            {region}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Assertions */}
                            <div className="p-8 rounded-[2rem] bg-[hsl(var(--gold))]/5 border border-[hsl(var(--gold))]/10 space-y-6">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="h-6 w-6 text-[hsl(var(--gold))]" />
                                    <h4 className="font-bold font-['Playfair_Display'] text-lg">Guaranteed Assurances</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <Clock className="h-4 w-4 text-[hsl(var(--gold))] shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm font-bold italic">15-Minute Response</p>
                                            <p className="text-xs text-muted-foreground font-light leading-relaxed">During active operational hours, our priority team responds within moments.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <Shield className="h-4 w-4 text-[hsl(var(--gold))] shrink-0 mt-1" />
                                        <div>
                                            <p className="text-sm font-bold italic">Uncompromising Discretion</p>
                                            <p className="text-xs text-muted-foreground font-light leading-relaxed">All communications are governed by our strict privacy protocol.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
            <MobileBookingCTA />
        </div>
    );
}