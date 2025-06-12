export const DefaultButton = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className={`bg-brand-primary text-white px-8 py-4 text-center  ${props.className}`}
        >
            {children}
        </button>
    )
}
