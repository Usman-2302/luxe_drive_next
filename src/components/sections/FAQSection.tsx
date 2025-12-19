"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section className="section-padding bg-card/30">
      <div className="luxury-container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-[hsl(var(--silver))] font-medium mb-4 tracking-wider uppercase text-sm">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">Frequently Asked <span className="text-gradient">Questions</span></h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="glass rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}