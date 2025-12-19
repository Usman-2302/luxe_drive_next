import { FleetPageTemplate } from "@/components/templates/FleetPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Luxury Fleet | Luxe Drive",
    description: "Premium vehicles for the ultimate experience.",
};

export default function Page() {
    return (
        <FleetPageTemplate
            filterClass="luxury"
            title="Luxury Fleet"
            description="The pinnacle of automotive excellence. Experience unmatched prestige and comfort in our flagship vehicles."
        />
    );
}
