import { DefaultButton } from "../Buttons/DefaultButton";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import { DefaultTitle } from "../Titles/DefaultTitle";
import { OurProductsCard } from "./OurProductsCard";

const PRODUCTS = [
    {
        image:
            "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
        title: "Modern Sofa",
        description: "Comfortable and modern",
        price: "1200",
        discount: "999",
        percentageDiscount: "17",
    },
    {
        image:
            "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Classic Sofa",
        description: "Timeless classic style",
        price: "2500",
        discount: "1999",
        percentageDiscount: "20",
    },
    {
        image:
            "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Minimalist Sofa",
        description: "Clean minimalist design",
        price: "800",
        discount: "699",
        percentageDiscount: "13",
    },
    {
        image:
            "https://images.unsplash.com/photo-1602374078449-4ac1a50b7a25?q=80&w=1379&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Corner Sofa",
        description: "Perfect for large living rooms",
        price: "3200",
        discount: "2999",
        percentageDiscount: "6",
    },
    {
        image:
            "https://plus.unsplash.com/premium_photo-1683121203379-ba4d4f27b933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Spacious Sofa",
        description: "Spacious and elegant",
        price: "1800",
        discount: "1599",
        percentageDiscount: "11",
    },
    {
        image:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
        title: "Luxury Sofa",
        description: "Premium finishing touches",
        price: "1400",
        discount: "1199",
        percentageDiscount: "14",
    },
    {
        image:
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Family Sofa",
        description: "Comfort for everyone",
        price: "4000",
        discount: "3499",
        percentageDiscount: "13",
    },
    {
        image:
            "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Compact Sofa",
        description: "Great for small spaces",
        price: "2200",
        discount: "1999",
        percentageDiscount: "9",
    },
];

export const OurProducts = () => (
    <SectionContainer>
        <DefaultTitle title="Our Products" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 place-items-center">
            {PRODUCTS.map((product, index) => (
                <OurProductsCard
                    key={index}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discount={product.discount}
                    percentageDiscount={product.percentageDiscount}
                />
            ))}
        </div>
        <div
            className="flex items-center justify-center mt-8"
        >
            <DefaultButton
                className="border border-brand-green_accent bg-brand-green_accent
                hover:bg-brand-green_accent/10 hover:text-brand-green_accent transition duration-300"
            >Show More
            </DefaultButton>
        </div>
    </SectionContainer>
);
