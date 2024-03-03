import { Link } from "react-router-dom";
import { GroupedMovieType } from "../types/GroupedMovieType";

const MovieBox = ({title, poster, ids}: GroupedMovieType) => {    
    const linkToUrl = "/moviedetails/"+ids;
    return (        
        <div className="group cursor-pointer relative">
            <img src={poster} alt="Image 1" className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-white drop-shadow-sm px-4 py-2 rounded-lg hover:backdrop-blur-md transition-colors">
                    <Link to={linkToUrl}>
                        <div>{title}</div>
                        <div className="text-xs mt-3">Provider IDS: {ids}</div>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MovieBox;