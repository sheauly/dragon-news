import { Star } from "lucide-react";
import { FaShareAltSquare, FaBookmark } from "react-icons/fa";
const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
      
    } = news;

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-md mx-auto hover:shadow-lg transition-shadow mt-8 ">
            <div className="flex justify-between items-center bg-gray-100 p-2">
                <div>
                    <div className="text-sm  text-gray-500 flex items-center gap-2 mt-4">
                        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                        <span className="font-medium text-gray-700">{author.name}</span>

                    </div>
                    <span className="">• {new Date(author.published_date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-700 gap-2 p-4 mt-4">
                    <FaBookmark size={20} />
                    <FaShareAltSquare size={20}/>
                </div>
                
            </div>
            <div className="p-4">
               
                <h2 className="text-xl font-semibold text-gray-800 mt-4">{title}</h2>
                <img src={thumbnail_url} alt={title} className="w-full h-48 object-cover mt-5" />
            </div>
        </div>
    );
};

export default NewsCard;
