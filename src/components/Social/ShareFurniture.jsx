import { SectionContainer } from "../SectionContainer/SectionContainer"
import { DefaultTitle } from "../Titles/DefaultTitle"

const PHOTOS_FURNITURE = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
        alt: "Modern wooden chair in living room"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        alt: "Minimalist sofa with cushions"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        alt: "Dining table with chairs"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
        alt: "Wooden bed with white bedding"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        alt: "Bookshelf with plants and books"
    },
    {
        id: 6,
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
        alt: "Cozy armchair near window"
    },
    {
        id: 7,
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        alt: "Modern coffee table"
    },
    {
        id: 8,
        url: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=600&q=80",
        alt: "Rustic wooden bench"
    },
    {
        id: 9,
        url: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80",
        alt: "Elegant wardrobe in bedroom"
    },
    {
        id: 10,
        url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=600&q=80",
        alt: "Vintage desk with lamp"
    }
];

export const ShareFurniture = () => {
    return (
        <div>
            <SectionContainer>
                <p className="text-center text-lg">Share your setup with</p>
                <DefaultTitle title="#FuniroFurniture" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {PHOTOS_FURNITURE.map((photo, index) => (
                        <div
                            key={photo.id}
                            className={`overflow-hidden ${index % 5 === 0 ? "col-span-2 row-span-2" : ""
                                }`}
                        >
                            <img
                                src={photo.url}
                                alt={photo.alt}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </div>
    )
}
