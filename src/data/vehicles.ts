export interface Vehicle {
  id: string;
  name: string;
  type: "sedan" | "suv";
  class: "executive" | "premium";
  image: string;
  capacity: number;
  luggage: number;
  priceFrom: number;
  amenities: string[];
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "mercedes-s-class",
    name: "Mercedes S-Class",
    type: "sedan",
    class: "premium",
    image: "/images/fleet/fleet-1.jpg",
    capacity: 3,
    luggage: 3,
    priceFrom: 150,
    amenities: ["Leather seats", "Climate control", "WiFi", "Water", "Phone charger", "Privacy glass"],
    description: "The epitome of luxury sedans with unmatched comfort and style."
  },
  {
    id: "bmw-7-series",
    name: "BMW 7 Series",
    type: "sedan",
    class: "premium",
    image: "/images/fleet/fleet-2.jpg",
    capacity: 3,
    luggage: 3,
    priceFrom: 140,
    amenities: ["Massage seats", "Ambient lighting", "WiFi", "Champagne cooler", "Entertainment system"],
    description: "German engineering meets ultimate luxury driving experience."
  },
  {
    id: "range-rover",
    name: "Range Rover",
    type: "suv",
    class: "premium",
    image: "/images/fleet/fleet-3.jpg",
    capacity: 4,
    luggage: 5,
    priceFrom: 180,
    amenities: ["Panoramic roof", "Terrain response", "WiFi", "Refrigerator", "Premium audio", "Air suspension"],
    description: "Commanding presence with exceptional comfort for any terrain."
  },
  {
    id: "cadillac-escalade",
    name: "Cadillac Escalade",
    type: "suv",
    class: "premium",
    image: "/images/fleet/fleet-4.jpg",
    capacity: 6,
    luggage: 6,
    priceFrom: 200,
    amenities: ["Captain seats", "38\" OLED display", "WiFi", "Mini bar", "Magnetic ride", "Night vision"],
    description: "American luxury SUV with space for the entire executive team."
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes E-Class",
    type: "sedan",
    class: "executive",
    image: "/images/fleet/fleet-5.jpg",
    capacity: 3,
    luggage: 2,
    priceFrom: 100,
    amenities: ["Leather seats", "Climate control", "WiFi", "Water", "USB charging"],
    description: "Executive comfort at an exceptional value."
  },
  {
    id: "audi-a8",
    name: "Audi A8",
    type: "sedan",
    class: "premium",
    image: "/images/fleet/fleet-6.jpg",
    capacity: 3,
    luggage: 3,
    priceFrom: 145,
    amenities: ["Quattro AWD", "Bang & Olufsen", "WiFi", "Rear tablets", "Foot massage", "Matrix LED"],
    description: "Progressive luxury with cutting-edge technology."
  }
];

export const vehicleTypes = ["sedan", "suv"] as const;
export const vehicleClasses = ["executive", "premium"] as const;