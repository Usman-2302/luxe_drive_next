import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium City Tours & Sightseeing | Luxe Drive",
    description: "Bespoke guided city tours in absolute comfort.",
};

export default function Page() {
    return <ServicePageTemplate slug="city-tours" />;
}
