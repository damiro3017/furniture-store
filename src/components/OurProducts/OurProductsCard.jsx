import { DefaultButton } from "../Buttons/DefaultButton"

export const OurProductsCard = ({ image, title, description, price, discount, percentageDiscount }) => {
    return (
        <div className="relative">
            {/* Card */}
            <img className="aspect-[3/4] object-cover cursor-pointer" src={image} alt="" />
            <div className="bg-brand-gray p-4 flex flex-col items-start gap-1">
                <h3 className="text-2xl font-medium">{title}</h3>
                <p className="font-light">{description}</p>
                <div className="flex gap-4">
                    <p className="">${price}</p>
                    <span className="text-gray-400 line-through">${discount}</span>
                </div>
                <DefaultButton className="mt-6 w-full hover:opacity-85 transition">
                    Add to cart
                </DefaultButton>
            </div>

            {/* Discount */}
            <div
                className="absolute top-4 right-4 size-12 flex items-center justify-center 
                bg-brand-red_accent text-white rounded-full text-sm select-none"
            >
                -{percentageDiscount}%
            </div>
        </div>
    )
}
