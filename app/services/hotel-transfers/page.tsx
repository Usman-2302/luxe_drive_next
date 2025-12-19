import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Luxury Hotel Transfers | Luxe Drive",
    description: "Door-to-door luxury transportation between hotels and landmarks.",
};

export default function Page() {
    return <ServicePageTemplate slug="hotel-transfers" />;
}
