import { FleetPageTemplate } from "@/components/templates/FleetPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vans & MPVs | Luxe Drive",
    description: "Luxury transport for larger groups.",
};

export default function Page() {
    return (
        <FleetPageTemplate
            filterType="Van"
            title="Vans & MPVs"
            description="Luxury group travel redefined. Spacious interiors configured for conversation and comfort."
        />
    );
}
