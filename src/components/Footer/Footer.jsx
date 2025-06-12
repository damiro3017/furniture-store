import { SendIcon } from "../../assets/icons/Icons"
import { SectionContainer } from "../SectionContainer/SectionContainer"
import { SubTitle } from "../Titles/SubTitle"

const CONTACT = [
    { text: "Worldwide furniture store since 2020. We sell over 1000+ branded products on our website" },
    { text: "Sawojajar Malang, Indonesia" },
    { text: "+6289 456 3455" },
    { text: "www.funiro.com" }
]

const MENU = [
    { text: "Products" },
    { text: "Rooms" },
    { text: "Inspirations" },
    { text: "About Us" },
    { text: "Terms & Policy" }
]

const ACCOUNT = [
    { text: "My Account" },
    { text: "Checkout" },
    { text: "My Cart" },
    { text: "My Catalog" }
]

const SOCIAL = [
    { text: "Facebook" },
    { text: "Instagram" },
    { text: "Twitter" },
    { text: "Pinterest" }
]

export const Footer = () => {
    return (
        <SectionContainer className="border-t border-t-brand-green_accent/40">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8">
                <ul className="flex flex-col gap-2">
                    <SubTitle subtitle="Funiro." />
                    {CONTACT.map((e, index) => (
                        <li className="text-gray-500" key={index}>{e.text}</li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-2">
                    <SubTitle subtitle="Menu" />
                    {MENU.map((e, index) => (
                        <li className="text-gray-500" key={index}>{e.text}</li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-2">
                    <SubTitle subtitle="Account" />
                    {ACCOUNT.map((e, index) => (
                        <li className="text-gray-500" key={index}>{e.text}</li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-2">
                    <SubTitle subtitle="Stay Connected" />
                    {SOCIAL.map((e, index) => (
                        <li className="text-gray-500" key={index}>{e.text}</li>
                    ))}
                </ul>
                <ul className="flex flex-col gap-2">
                    <SubTitle subtitle="Stay Updated" />
                    <div className="flex items-center">
                        <input type="text" placeholder="Enter your email"
                            className="bg-brand-gray outline-none p-2 w-44"
                        />
                        <div className="bg-brand-primary p-2">
                            <SendIcon className="text-white" />
                        </div>
                    </div>
                </ul>
            </div>
        </SectionContainer>
    )
}
