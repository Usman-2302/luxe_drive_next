import { Plane, Briefcase, Heart, MapPin, Hotel, CreditCard, Wifi, Coffee, CalendarCheck, UserCheck, Car, Flag, Luggage, Clock } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  image: string;
  pricing: {
    basePrice: string;
    addons: { name: string; price: string; icon: any }[];
  };
  process: { title: string; description: string; icon: any }[];
  luggage: { large: number; carryOn: number; notes: string };
}

export const services: Service[] = [
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    description: "Seamless airport pickups and drop-offs with flight tracking and meet-and-greet service.",
    icon: Plane,
    features: [
      "Real-time flight tracking",
      "Meet & greet service",
      "Complimentary wait time",
      "Luggage assistance"
    ],
    image: "/images/services/airport.jpg",
    pricing: {
      basePrice: "$150",
      addons: [
        { name: "Extra Wait Time (30m)", price: "$40", icon: Clock },
        { name: "Child Seat", price: "$25", icon: UserCheck },
        { name: "In-Car Coffee Service", price: "$15", icon: Coffee }
      ]
    },
    process: [
      { title: "Booking", description: "Secure your vehicle online.", icon: CalendarCheck },
      { title: "Assignment", description: "Chauffeur details sent 24h prior.", icon: UserCheck },
      { title: "Pickup", description: "Meet & Greet at arrival hall.", icon: MapPin },
      { title: "Journey", description: "Smooth ride with amenities.", icon: Car },
      { title: "Arrival", description: "Doorstep drop-off assistance.", icon: Flag }
    ],
    luggage: { large: 2, carryOn: 2, notes: "Per vehicle (Sedan). SUV upgrades available." }
  },
  {
    id: "hotel-transfers",
    title: "Hotel Transfers",
    description: "Luxury transportation between your hotel and any destination in the city.",
    icon: Hotel,
    features: [
      "Door-to-door service",
      "Luggage handling",
      "Concierge coordination",
      "24/7 availability"
    ],
    image: "/images/services/hotel.jpg",
    pricing: {
      basePrice: "$120",
      addons: [
        { name: "City Detour (1h)", price: "$80", icon: MapPin },
        { name: "Champagne Service", price: "$100", icon: Coffee },
        { name: "Floral Arrangement", price: "$60", icon: Heart }
      ]
    },
    process: [
      { title: "Reservation", description: "Concierge or direct booking.", icon: CalendarCheck },
      { title: "Dispatch", description: "Vehicle arrives 15m early.", icon: UserCheck },
      { title: "Concierge", description: "Luggage & key handling.", icon: Luggage },
      { title: "Transfer", description: "Direct luxury route.", icon: Car },
      { title: "Check-In", description: "Assistance to reception.", icon: Flag }
    ],
    luggage: { large: 3, carryOn: 3, notes: "Ample trunk space for wardrobe cases." }
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    description: "Professional executive transportation for business meetings and corporate events.",
    icon: Briefcase,
    features: [
      "Priority scheduling",
      "Corporate accounts",
      "Onboard WiFi & charging",
      "Discretion guaranteed"
    ],
    image: "/images/services/corporate.jpg",
    pricing: {
      basePrice: "$180/hr",
      addons: [
        { name: "High-Speed WiFi", price: "Incl.", icon: Wifi },
        { name: "Confidentiality NDA", price: "Incl.", icon: UserCheck },
        { name: "Multiple Stops", price: "Flexible", icon: MapPin }
      ]
    },
    process: [
      { title: "Schedule", description: "Coordinate via assistant/app.", icon: CalendarCheck },
      { title: "Verification", description: "Driver ID & vehicle check.", icon: UserCheck },
      { title: "Pickup", description: "Curbside executive retrieval.", icon: MapPin },
      { title: "Transit", description: "Mobile office environment.", icon: Car },
      { title: "Completion", description: "Automated expensing.", icon: Flag }
    ],
    luggage: { large: 1, carryOn: 2, notes: "Optimized for briefcases and garment bags." }
  },
  {
    id: "wedding-services",
    title: "Wedding Chauffeur",
    description: "Make your special day perfect with our elegant wedding transportation services.",
    icon: Heart,
    features: [
      "Decorated vehicles",
      "Red carpet service",
      "Champagne on request",
      "Photography stops"
    ],
    image: "/images/services/wedding.jpg",
    pricing: {
      basePrice: "$500",
      addons: [
        { name: "Red Carpet", price: "$50", icon: Heart },
        { name: "Just Married Sign", price: "$30", icon: Flag },
        { name: "Premium Champagne", price: "$150", icon: Coffee }
      ]
    },
    process: [
      { title: "Consultation", description: "Route & timing planning.", icon: CalendarCheck },
      { title: "Preparation", description: "Vehicle decoration & detailed detailing.", icon: Heart },
      { title: "Arrival", description: "Grand entrance protocol.", icon: MapPin },
      { title: "Ceremony", description: "Photo stops & transfers.", icon: Car },
      { title: "Reception", description: "Final getaway drive.", icon: Flag }
    ],
    luggage: { large: 0, carryOn: 2, notes: "Space reserved for dress/train management." }
  },
  {
    id: "city-tours",
    title: "City Tours",
    description: "Explore the city in comfort with our personalized sightseeing experiences.",
    icon: MapPin,
    features: [
      "Customizable routes",
      "Knowledgeable chauffeurs",
      "Flexible scheduling",
      "Multi-city options"
    ],
    image: "/images/services/city-tour.jpg",
    pricing: {
      basePrice: "$100/hr",
      addons: [
        { name: "Expert Guide", price: "$80/hr", icon: UserCheck },
        { name: "Refreshments", price: "Incl.", icon: Coffee },
        { name: "Tickets Concierge", price: "Var.", icon: CreditCard }
      ]
    },
    process: [
      { title: "Curate", description: "Design your custom itinerary.", icon: CalendarCheck },
      { title: "Meet", description: "Hotel or location pickup.", icon: UserCheck },
      { title: "Explore", description: "Guided sights & hidden gems.", icon: MapPin },
      { title: "Experience", description: "Photo ops & leisure pace.", icon: Car },
      { title: "Return", description: "Drop-off at choice location.", icon: Flag }
    ],
    luggage: { large: 1, carryOn: 4, notes: "Perfect for shopping bags and day packs." }
  }
];