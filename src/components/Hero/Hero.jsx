import { SectionContainer } from "../SectionContainer/SectionContainer";
import { DefaultButton } from "../Buttons/DefaultButton";

export const Hero = () => {
    return (
        <SectionContainer className="relative pt-16 lg:pt-0">
            <div className="hidden lg:flex absolute bg-white/80 backdrop-blur-sm top-8 left-12 max-w-sm p-8 flex-col shadow-md">
                <h1 className="text-5xl font-bold text-gray-800">
                    High-Quality Furniture Just For You
                </h1>
                <p className="mt-4 text-gray-600">
                    Our furniture is made from selected and best quality materials that are
                    suitable for your dream home
                </p>
                <DefaultButton className="mt-6">
                    Shop Now
                </DefaultButton>
            </div>

            <div className="lg:hidden absolute inset-0 flex items-end pb-12 px-6">
                <div className="bg-white/90 backdrop-blur-sm w-full p-6 flex flex-col shadow-md">
                    <h1 className="text-3xl font-bold text-gray-800">
                        High-Quality Furniture
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Made from selected and best quality materials
                    </p>
                    <DefaultButton className="mt-4 w-full">
                        Shop Now
                    </DefaultButton>
                </div>
            </div>

            <img
                className="w-full object-cover h-[calc(100vh-4rem)] lg:h-screen"
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg"
                alt="Modern furniture showcase"
            />
        </SectionContainer>
    );
};