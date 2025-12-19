import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Corporate Travel | Luxe Drive",
    description: "Professional executive transportation.",
};

export default function Page() {
    return <ServicePageTemplate slug="corporate-travel" />;
}
