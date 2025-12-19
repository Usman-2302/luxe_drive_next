export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Victoria Sterling",
    role: "CEO",
    company: "Sterling Investments",
    content: "Luxe Drive has transformed our corporate travel experience. The attention to detail and professionalism of their chauffeurs is unmatched. They've become an essential part of our business operations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: "2",
    name: "Alexander Chen",
    role: "Managing Director",
    company: "Chen & Associates",
    content: "I've used many chauffeur services over the years, but Luxe Drive stands apart. Their punctuality is impeccable, and the vehicles are always immaculate. Highly recommended for executives.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    id: "3",
    name: "Isabella Romano",
    role: "Fashion Designer",
    content: "From airport pickups to fashion week events, Luxe Drive has never let me down. The luxury and discretion they provide is exactly what I need. Absolutely first-class service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  },
  {
    id: "4",
    name: "Marcus Thompson",
    role: "Professional Athlete",
    content: "When you need reliability and comfort after a long game, Luxe Drive delivers. Their drivers are professional, the cars are top-notch, and booking is effortless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  },
  {
    id: "5",
    name: "Elizabeth Windsor",
    role: "Event Planner",
    company: "Prestige Events",
    content: "We trust Luxe Drive for all our VIP guest transportation. They understand the importance of making a great impression and consistently exceed expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
  }
];