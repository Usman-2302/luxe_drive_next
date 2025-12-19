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
        image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=600&h=800&fit=crop",
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
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
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
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
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
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
        bio: "Expert in luxury city tours and long-term private client service with a deep knowledge of major global hubs."
    }
];
