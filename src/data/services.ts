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
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop"
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
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
  }
];