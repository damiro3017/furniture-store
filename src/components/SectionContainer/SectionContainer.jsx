export const SectionContainer = ({ children, ...props }) => {
    return (
        <section
            {...props}
            className={`max-w-7xl px-4 mx-auto py-10 ${props.className}`}>
            {children}
        </section>
    )
}
