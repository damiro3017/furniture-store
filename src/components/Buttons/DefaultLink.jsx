import { Link } from "react-router-dom"

export const DefaultLink = ({ to, text, ...props }) => {
    return (
        <Link
            {...props}
            className="bg-brand-primary text-white px-8 py-4 text-center"
            to={to}
        >
            {text}
        </Link>
    )
}
