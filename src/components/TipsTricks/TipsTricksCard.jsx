export const TipsTricksCard = ({ image, title, date }) => {
    return (
        <div className="shadow-md shadow-gray-300 hover:scale-105 cursor-pointer transition-all duration-300">
            <img
                className="aspect-video object-cover"
                src={image}
                alt=""
            />
            <div className="p-4 bg-white text-pretty">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-gray-400 mt-2">{date}</p>
            </div>
        </div>
    )
}
