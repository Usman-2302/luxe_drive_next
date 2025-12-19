import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center p-4 pt-24">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-8xl md:text-9xl font-bold font-['Playfair_Display'] text-[hsl(var(--silver))]/20 mb-4 animate-in fade-in zoom-in duration-700">
                        404
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-6">
                        Journey <span className="text-gradient">Not Found</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                        The destination you are looking for has been moved or does not exist.
                        Allow us to chauffeur you back to safety.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" variant="premium" asChild>
                            <Link href="/">Back to Home</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">Contact Support</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
