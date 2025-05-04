import { FaBookmark, FaEye, FaStar } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        details,
        thumbnail_url,
        rating,
        total_view,
        tags,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md  mb-6">
            {/* Author and share icon */}
            <div className="flex bg-base-200 justify-between items-center p-4 ">
                <div className="flex items-center gap-3 p-4">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-sm text-gray-500">
                            {format(new Date(author.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>
                <button className="text-gray-500 flex gap-2 cursor-pointer">
                    <FaBookmark />
                    <BsShareFill/>
                </button>
                </div>

            {/* Title */}
            <h2 className="text-lg font-bold p-4 pt-3">{title}</h2>

            {/* Image */}
            <figure>
                <img
                    src={thumbnail_url}
                    alt="thumbnail"
                    className="w-full p-4 h-[250px] object-cover"
                />
            </figure>

            {/* Details */}
            <div className="p-4 pt-3 text-gray-700 text-sm">
                <p>
                    {details.slice(0, 300)}...
                    <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer">
                        {" "}
                        Read More
                    </Link>
                </p>
            </div>

            {/* Tags */}
            <div className="px-4 pb-2 text-xs text-gray-500">
                <strong>Tags:</strong> {tags.join(", ")}
            </div>

            {/* Footer */}
            <div className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < rating.number ? "" : "text-gray-300"} />
                    ))}
                    <span className="text-black ml-2 font-medium">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
