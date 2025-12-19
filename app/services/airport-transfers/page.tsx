import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Executive Airport Transfers | Luxe Drive",
    description: "Seamless, punctual airport pickups and drop-offs with flight tracking.",
};

export default function Page() {
    return <ServicePageTemplate slug="airport-transfers" />;
}
