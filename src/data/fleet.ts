export interface FleetVehicle {
    id: string;
    name: string;
    type: "Sedan" | "SUV" | "Van";
    image: string;
    seats: number;
    price: number;
    features: string[];
    description: string;
    availability: boolean;
}

export const fleet: FleetVehicle[] = [
    {
        id: "mercedes-s-class-2024",
        name: "Mercedes-Benz S-Class",
        type: "Sedan",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
        seats: 3,
        price: 150,
        features: ["Massaging Seats", "Burmester® Sound", "Ambient Lighting", "Executive Rear Package"],
        description: "The ultimate flagship sedan, offering unparalleled comfort and state-of-the-art technology.",
        availability: true
    },
    {
        id: "bmw-7-series-2024",
        name: "BMW 7 Series",
        type: "Sedan",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
        seats: 3,
        price: 140,
        features: ["Sky Lounge Roof", "Bowers & Wilkins High End", "Rear Theater Screen"],
        description: "Progressive luxury meets advanced digitalization and magnificent presence.",
        availability: true
    },
    {
        id: "range-rover-autobiography",
        name: "Range Rover Autobiography",
        type: "SUV",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
        seats: 4,
        price: 180,
        features: ["All-Terrain Progress Control", "Pivi Pro Infotainment", "Meridian™ Signature Sound"],
        description: "The world's most capable luxury SUV, refined for the most discerning travelers.",
        availability: true
    },
    {
        id: "cadillac-escalade-premium",
        name: "Cadillac Escalade Platinum",
        type: "SUV",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop",
        seats: 6,
        price: 200,
        features: ["Super Cruise™", "AKG Studio Reference 36-Speaker", "Night Vision"],
        description: "Dominant presence with immense space and cutting-edge American luxury.",
        availability: true
    },
    {
        id: "mercedes-v-class-extra",
        name: "Mercedes-Benz V-Class",
        type: "Van",
        image: "https://images.unsplash.com/photo-1559416523-140dd387023c?w=800&h=600&fit=crop",
        seats: 7,
        price: 160,
        features: ["Conference Seating", "Burmester® Surround Sound", "Electric Sliding Doors"],
        description: "The benchmark for group travel, combining versatility with premium refinement.",
        availability: true
    },
    {
        id: "audi-a8-l",
        name: "Audi A8 L",
        type: "Sedan",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop",
        seats: 3,
        price: 145,
        features: ["Bang & Olufsen 3D Sound", "Rear Seat Remote", "OLED Tail Lights"],
        description: "Discreet luxury with sophisticated technology and exceptional build quality.",
        availability: true
    }
];
