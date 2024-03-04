import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";
import { Link } from "react-router-dom";

const MovieDetails = () => {
    const {ids} = useParams<{ ids: string }>();
    const movieDetail = useGetMovieDetails(ids || "");
    const arrayId = ids?.split(',');

    return (
        <div className="main-wrapper">

            <div className="flex justify-center items-center">
                <div className="max-w-lg p-3 grid grid-cols-1 sm:grid-cols-3 sm:gap-0 md:grid-cols-3 lg:grid-cols-3 gap-4 bg-zinc-100 rounded-sm">
                    <div className="flex justify-center items-start">
                        <img className="w-40" src={movieDetail?.poster} />
                    </div>
                    <div className="col-span-2 p-3">
                        <div className="text-lg text-blue-400 font-bold">{movieDetail?.title} <span className="text-gray-500 text-md">({movieDetail?.year})</span></div>
                        <div className="text-xs text-gray-400 pt-2">
                            {movieDetail?.rated} | {movieDetail?.runtime}  |  {movieDetail?.genre}
                        </div>
                        <div className="text-xs text-gray-600 pt-2 pb-3">
                            Rating : {movieDetail?.rating}/10  .  Metascore : <span className="bg-yellow-600 text-white pr-1 pl-1">{movieDetail?.metascore}</span>
                        </div>
                        <div className="text-xs">
                            {movieDetail?.plot}
                        </div>
                        <div className="text-xs text-gray-500 pt-4 pb-2">
                            Directors: {movieDetail?.director} | Actors: {movieDetail?.actors}
                        </div>
                        <div className="text-xs text-gray-400 pt-2 pb-2">
                            Votes: {movieDetail?.votes}
                        </div>
                        <div className="text-lg text-red-800 font-semibold border-t-2 pt-4">
                            Cheapest @ {movieDetail?.price} from {arrayId?.length} provider(s)
                        </div>
                    </div>
                </div>                                
            </div>            

            <div className="p-10 flex justify-center justify-center text-sm">
                <Link to="/">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        List of movies
                    </button>         
                </Link>   
            </div>
        </div>
    )
}

export default MovieDetails;