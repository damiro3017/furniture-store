import { Benefits } from "../../components/Benefits/Benefits"
import { Hero } from "../../components/Hero/Hero"
import { OurProducts } from "../../components/OurProducts/OurProducts"
import { ShareFurniture } from "../../components/Social/ShareFurniture"
import { TipsTricks } from "../../components/TipsTricks/TipsTricks"

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Benefits />
            <OurProducts />
            <TipsTricks />
            <ShareFurniture />
        </>
    )
}
