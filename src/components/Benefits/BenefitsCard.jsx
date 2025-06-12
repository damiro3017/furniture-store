export const BenefitsCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex items-center gap-6">
            <Icon className="size-10" />
            <div>
                <h6 className="font-semibold text-lg">{title}</h6>
                <p className="font-light">{description}</p>
            </div>
        </div>
    )
}
