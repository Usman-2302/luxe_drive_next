export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Executive Travel: Maximizing Productivity on the Move",
    excerpt: "Discover how successful executives transform travel time into productive hours with the right approach to luxury transportation.",
    category: "Business Travel",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    readTime: "5 min"
  },
  {
    id: "2",
    title: "Top 10 Airport Transfer Tips for the Seasoned Traveler",
    excerpt: "From timing your pickup to maximizing comfort, learn the insider tips that make airport transfers seamless and stress-free.",
    category: "Travel Tips",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
    readTime: "4 min"
  },
  {
    id: "3",
    title: "Luxury Vehicles of 2024: What's New in Our Fleet",
    excerpt: "Explore the latest additions to our premium fleet, featuring cutting-edge technology and unparalleled comfort.",
    category: "Fleet News",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop",
    readTime: "6 min"
  }
];