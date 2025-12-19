import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Luxury Wedding Chauffeur | Luxe Drive",
    description: "Elegant wedding transportation services for your special day.",
};

export default function Page() {
    return <ServicePageTemplate slug="wedding-services" />;
}
