"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, User, Plane, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const serviceLinks = [
  { title: "Airport Transfers", href: "/services/airport-transfers", description: "Seamless airport pickups & drop-offs." },
  { title: "Hotel Transfers", href: "/services/hotel-transfers", description: "Luxury transport between hotels and destinations." },
  { title: "Corporate Travel", href: "/services/corporate-travel", description: "Professional executive transportation." },
  { title: "Wedding Travel", href: "/services/wedding-services", description: "Elegant transportation for your special day." },
  { title: "City Tour", href: "/services/city-tours", description: "Explore the city in absolute comfort." },
];

const fleetLinks = [
  { title: "Executive", href: "/fleet/executive", description: "Business class sedans." },
  { title: "Luxury", href: "/fleet/luxury", description: "Flagship premium vehicles." },
  { title: "Luxury SUV", href: "/fleet/luxury-suv", description: "Spacious luxury SUVs." },
  { title: "Vans & MPVs", href: "/fleet/van", description: "Group travel ranges." },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="luxury-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-bold tracking-tight font-['Playfair_Display']">
              LUXE<span className="text-muted-foreground/80 font-normal">DRIVE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-md">
                      {serviceLinks.map((service) => (
                        <ListItem key={service.title} title={service.title} href={service.href}>
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Fleet</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-popover/95 backdrop-blur-md">
                      {fleetLinks.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                      <li className="col-span-2 mt-2 pt-2 border-t border-border/50">
                        <NavigationMenuLink asChild className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-center text-sm font-medium text-muted-foreground">
                          <Link href="/fleet">
                            View Full Fleet
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/chauffeurs">
                      Chauffeurs
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/contact">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <div className="h-6 w-px bg-border" />
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <Button variant="luxury-gold" size="sm" className="rounded-full px-6" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 top-[72px] bg-background border-t border-border lg:hidden overflow-y-auto"
          >
            <div className="p-4 space-y-6 container mx-auto">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest pl-2">Menu</h3>
                <Link href="/" className="block p-3 rounded-lg hover:bg-accent text-lg font-medium">Home</Link>
                <Link href="/services" className="block p-3 rounded-lg hover:bg-accent text-lg font-medium">Services</Link>
                <div className="pl-6 space-y-2 border-l-2 border-border/50 ml-3">
                  {serviceLinks.map(s => (
                    <Link key={s.href} href={s.href} className="block py-2 text-muted-foreground hover:text-foreground">{s.title}</Link>
                  ))}
                </div>
                <Link href="/fleet" className="block p-3 rounded-lg hover:bg-accent text-lg font-medium">Fleet</Link>
                <div className="pl-6 space-y-2 border-l-2 border-border/50 ml-3">
                  {fleetLinks.map(s => (
                    <Link key={s.href} href={s.href} className="block py-2 text-muted-foreground hover:text-foreground">{s.title}</Link>
                  ))}
                </div>
                <Link href="/chauffeurs" className="block p-3 rounded-lg hover:bg-accent text-lg font-medium">Chauffeurs</Link>
                <Link href="/about" className="block p-3 rounded-lg hover:bg-accent text-lg font-medium">About</Link>
                <Link href="/contact" className="block p-3 rounded-lg hover:bg-accent text-lg font-medium">Contact</Link>
              </div>
              <Button className="w-full h-12 text-lg" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};