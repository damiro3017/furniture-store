// Componentes
import { SectionContainer } from "../SectionContainer/SectionContainer"
import { BenefitsCard } from "./BenefitsCard"

// Iconos
import { TropyIcon, CheckIcon, TruckIcon, ClockIcon } from "../../assets/icons/Icons"

const BENEFITS_ITEMS = [
    { icon: TropyIcon, title: "High Quality", description: "Crafted from top materials" },
    { icon: CheckIcon, title: "Warranty Protection", description: "Over 2 years " },
    { icon: TruckIcon, title: "Free Shipping", description: "Order over $150" },
    { icon: ClockIcon, title: "24/7 Support", description: "Dedicated support" }
]

export const Benefits = () => {
    return (
        <SectionContainer >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 xl:place-items-center">
                {BENEFITS_ITEMS.map((e, index) => (
                    <BenefitsCard
                        key={index}
                        icon={e.icon}
                        title={e.title}
                        description={e.description}
                    />
                ))}
            </div>
        </SectionContainer>
    )
}
