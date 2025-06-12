import { Link } from "react-router-dom";

// ICONS
import {
    HeartIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "../../assets/icons/Icons";

// IMAGES
import ProfileImage from "../../assets/images/profile-photo.webp";

export const Header = () => {
    // DATA
    const PRODUCTS = [
        { id: 1, name: "Product 01", to: "/" },
        { id: 2, name: "Product 02", to: "/" },
        { id: 3, name: "Product 03", to: "/" },
        { id: 4, name: "Product 04", to: "/" },
        { id: 5, name: "Product 05", to: "/" },
    ];

    const ROOMS = [
        { id: 1, name: "Room 01", to: "/" },
        { id: 2, name: "Room 02", to: "/" },
        { id: 3, name: "Room 03", to: "/" },
        { id: 4, name: "Room 04", to: "/" },
        { id: 5, name: "Room 05", to: "/" },
    ];

    return (
        <header className="bg-brand-gray">
            <div className="flex items-center p-4 max-w-7xl mx-auto">
                <Link to="/">
                    <h2 className="font-bold text-2xl">Funiro.</h2>
                </Link>

                <nav className="flex items-center gap-10 ml-8">
                    <ul className="items-center gap-10 hidden lg:flex">
                        <li>Products</li>
                        <li>Rooms</li>
                        <li>Inspirations</li>
                    </ul>

                    <div className="hidden lg:flex items-center p-2.5 gap-4 w-[420px] bg-white">
                        <SearchIcon className="size-4" />
                        <input
                            className="outline-none"
                            type="text"
                            name="searchInput"
                            id="searchInput"
                            placeholder="Search for minimalistic chair"
                        />
                    </div>
                </nav>

                <div className="flex items-center gap-8 ml-auto">
                    <Link>
                        <HeartIcon className="size-6" />
                    </Link>
                    <Link>
                        <ShoppingCartIcon className="size-6" />
                    </Link>
                    <Link>
                        <img
                            className="rounded-full size-8"
                            src={ProfileImage}
                            alt="Profile photo of Damiro Gómez."
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};
