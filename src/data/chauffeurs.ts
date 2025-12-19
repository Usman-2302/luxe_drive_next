export interface Chauffeur {
    id: string;
    name: string;
    role: string;
    experience: string;
    languages: string[];
    specialties: string[];
    rating: number;
    image: string;
    bio: string;
}

export const chauffeurs: Chauffeur[] = [
    {
        id: "1",
        name: "James Anderson",
        role: "Senior Executive Chauffeur",
        experience: "12+ Years",
        languages: ["English", "French"],
        specialties: ["Corporate Travel", "Airport Transfers"],
        rating: 4.9,
        image: "/images/chauffeurs/c-1.jpg",
        bio: "Ex-military driver with extensive training in defensive driving and executive protection."
    },
    {
        id: "2",
        name: "Thomas Muller",
        role: "Premium Service Specialist",
        experience: "8+ Years",
        languages: ["English", "German", "Spanish"],
        specialties: ["VIP Concierge", "City Tours"],
        rating: 4.8,
        image: "/images/chauffeurs/c-2.jpg",
        bio: "Multilingual specialist focused on providing a bespoke concierge experience for international clients."
    },
    {
        id: "3",
        name: "Sarah Jenkins",
        role: "Elite Protocol Driver",
        experience: "10+ Years",
        languages: ["English", "Italian"],
        specialties: ["Wedding Services", "High-Profile Events"],
        rating: 5.0,
        image: "/images/chauffeurs/c-3.jpg",
        bio: "Specializes in high-protocol events and luxury weddings, ensuring every detail of the journey is perfect."
    },
    {
        id: "4",
        name: "David Chen",
        role: "Private Client Chauffeur",
        experience: "15+ Years",
        languages: ["English", "Mandarin", "Cantonese"],
        specialties: ["Private Tours", "Family Concierge"],
        rating: 4.9,
        image: "/images/chauffeurs/c-4.jpg",
        bio: "Expert in luxury city tours and long-term private client service with a deep knowledge of major global hubs."
    }
];
