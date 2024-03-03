import MovieBox from "../components/MovieBox"
import { useGetMovieList } from "../hooks/useGetMovieList"

const Home = () => {

    const movieList = useGetMovieList();

    return (
            <div className="main-wrapper">
                <div className="text-sm text-zinc-500 mb-5 text-center">Click a movie below to show the cheapest movie provider.</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

                    { movieList.map( (item, index) => {
                        return (
                            <MovieBox {...item} key={index} />
                        )
                    })}

                </div>
            </div>
    )
}

export default Home;
