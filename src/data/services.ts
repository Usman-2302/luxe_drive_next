import { Plane, Briefcase, Heart, MapPin, Hotel } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Plane;
  features: string[];
  image: string;
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
    image: "/images/services/airport.jpg"
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
    image: "/images/services/hotel.jpg"
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
    image: "/images/services/corporate.jpg"
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
    image: "/images/services/wedding.jpg"
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
    image: "/images/services/city-tour.jpg"
  }
];