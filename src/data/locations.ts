export interface Location {
  id: string;
  name: string;
  type: "airport" | "hotel" | "business" | "landmark" | "station";
}

export const popularLocations: Location[] = [
  { id: "1", name: "JFK International Airport", type: "airport" },
  { id: "2", name: "LaGuardia Airport", type: "airport" },
  { id: "3", name: "Newark Liberty International Airport", type: "airport" },
  { id: "4", name: "The Plaza Hotel", type: "hotel" },
  { id: "5", name: "The Ritz-Carlton New York", type: "hotel" },
  { id: "6", name: "Four Seasons Hotel", type: "hotel" },
  { id: "7", name: "One World Trade Center", type: "business" },
  { id: "8", name: "Empire State Building", type: "landmark" },
  { id: "9", name: "Grand Central Terminal", type: "station" },
  { id: "10", name: "Penn Station", type: "station" },
  { id: "11", name: "Wall Street Financial District", type: "business" },
  { id: "12", name: "Times Square", type: "landmark" },
  { id: "13", name: "Central Park", type: "landmark" },
  { id: "14", name: "Brooklyn Bridge", type: "landmark" },
  { id: "15", name: "Statue of Liberty Ferry Terminal", type: "landmark" }
];