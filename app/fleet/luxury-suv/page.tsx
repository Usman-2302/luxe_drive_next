import { FleetPageTemplate } from "@/components/templates/FleetPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SUV Fleet | Luxe Drive",
    description: "Spacious luxury SUVs for groups and luggage.",
};

export default function Page() {
    return (
        <FleetPageTemplate
            filterType="SUV"
            title="SUV Collection"
            description="Commanding presence meets exceptional space. Perfect for groups, luggage, or those who prefer a higher vantage point."
        />
    );
}
