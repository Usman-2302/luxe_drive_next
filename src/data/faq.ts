export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How far in advance should I book?",
    answer: "For standard bookings, we recommend at least 24 hours in advance. However, for peak times, special events, or premium vehicles, we suggest booking 48-72 hours ahead to ensure availability. We also accommodate last-minute requests when possible."
  },
  {
    id: "2",
    question: "What is included in the service fee?",
    answer: "Our service fee includes the professional chauffeur, luxury vehicle, fuel, insurance, tolls, and complimentary amenities such as bottled water and WiFi. Gratuity is not included but is always appreciated for exceptional service."
  },
  {
    id: "3",
    question: "Can I request a specific vehicle?",
    answer: "Absolutely. You can select your preferred vehicle during booking. We offer a range of premium sedans and SUVs including Mercedes S-Class, BMW 7 Series, Range Rover, and Cadillac Escalade. Vehicle availability varies by location."
  },
  {
    id: "4",
    question: "What happens if my flight is delayed?",
    answer: "We track all flights in real-time. If your flight is delayed, your chauffeur will automatically adjust their arrival time. There's no additional charge for flight delays up to 60 minutes for domestic flights and 90 minutes for international flights."
  },
  {
    id: "5",
    question: "Do you offer corporate accounts?",
    answer: "Yes, we offer tailored corporate account solutions with priority booking, dedicated account managers, consolidated billing, and volume discounts. Contact our corporate team to set up an account for your business."
  },
  {
    id: "6",
    question: "What is your cancellation policy?",
    answer: "Cancellations made more than 24 hours before the scheduled pickup receive a full refund. Cancellations within 24 hours are subject to a 50% fee. No-shows are charged the full amount. Special events may have different policies."
  },
  {
    id: "7",
    question: "Are your chauffeurs professionally trained?",
    answer: "All our chauffeurs undergo rigorous background checks and professional training. They are licensed, insured, and trained in defensive driving, customer service excellence, and confidentiality protocols."
  },
  {
    id: "8",
    question: "Do you provide child safety seats?",
    answer: "Yes, we provide complimentary child safety seats upon request. Please specify the age and weight of the child when booking so we can provide the appropriate seat type. Advance notice is appreciated."
  }
];