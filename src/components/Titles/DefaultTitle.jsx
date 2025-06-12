export const DefaultTitle = ({ title, ...props }) => {
    return (
        <h2
            {...props}
            className="font-bold text-4xl mb-8 text-center"
        >
            {title}
        </h2>
    )
}
