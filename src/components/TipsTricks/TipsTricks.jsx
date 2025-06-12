import { SectionContainer } from "../SectionContainer/SectionContainer"
import { TipsTricksCard } from "./TipsTricksCard"
import { DefaultTitle } from "../Titles/DefaultTitle"

const TIPS = [
    {
        image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
        title: "How to create a living room to love",
        date: "02 feb 2023",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1720707755672-fa44f1711954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
        title: "Solution for clean look working space",
        date: "20 jan 2023",
    },
    {
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
        title: "Make your cooking activity more fun with good setup",
        date: "10 jan 2022",
    }
]

export const TipsTricks = () => {
    return (
        <div className="bg-brand-gray">
            <SectionContainer>
                <DefaultTitle title="Tips & Tricks" />
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8">
                    {TIPS.map((e, index) => (
                        <TipsTricksCard
                            key={index}
                            image={e.image}
                            title={e.title}
                            date={e.date}
                        />
                    ))}
                </div>
            </SectionContainer >
        </div>
    )
}
