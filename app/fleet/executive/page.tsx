import { FleetPageTemplate } from "@/components/templates/FleetPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Executive Fleet | Luxe Drive",
    description: "Business class vehicles for professional travel.",
};

export default function Page() {
    return (
        <FleetPageTemplate
            filterClass="executive"
            title="Executive Fleet"
            description="Refined comfort for business travel. Our executive class vehicles offer a perfect blend of style and efficiency."
        />
    );
}
