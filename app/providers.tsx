"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, useEffect, createContext, useContext, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { BrandedLoader } from "@/components/ui/branded-loader";
import { BookingProvider } from "@/components/booking/BookingContext";

const LoadingContext = createContext({
    isLoading: false,
    setIsLoading: (loading: boolean) => { },
});

export const useLoading = () => useContext(LoadingContext);

function RouteLoaderInner({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Reset loading state when route changes
    useEffect(() => {
        setIsLoading(false);
    }, [pathname, searchParams]);

    // Fast-trigger for internal links
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (!anchor) return;

            const href = anchor.getAttribute("href");
            const targetAttr = anchor.getAttribute("target");

            // Ignore external links, downloads, and modifier clicks
            if (
                !href ||
                href.startsWith("http") ||
                href.startsWith("#") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                targetAttr === "_blank" ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey
            ) {
                return;
            }

            // Only trigger if the href is different from current or has search params
            const currentUrl = window.location.pathname + window.location.search;
            if (href !== currentUrl) {
                setIsLoading(true);
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <AnimatePresence mode="wait">
                {isLoading && <BrandedLoader />}
            </AnimatePresence>
            {children}
        </LoadingContext.Provider>
    );
}

function RouteLoaderProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={null}>
            <RouteLoaderInner>{children}</RouteLoaderInner>
        </Suspense>
    );
}

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
        >
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <RouteLoaderProvider>
                        <BookingProvider>
                            {children}
                            <Toaster />
                            <Sonner />
                        </BookingProvider>
                    </RouteLoaderProvider>
                </TooltipProvider>
            </QueryClientProvider>
        </NextThemesProvider>
    );
}
