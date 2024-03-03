import { useEffect, useState } from "react"
import { MovieDetailType } from "../types/MovieDetailType"
import { useLoader } from "./useLoader";

const moviePosterArray = [
    {title: "Star Wars: Episode IV - A New Hope", poster: "https://cdn2.penguin.com.au/covers/original/9781473544888.jpg"},
    {title: "Star Wars: Episode V - The Empire Strikes Back", poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg" },
    {title: "Star Wars: Episode VI - Return of the Jedi", poster: "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg" },
    {title: "Star Wars: Episode I - The Phantom Menace", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnli61uq0mdvdFcDcJGE6VYsl0bBN91XvFX2ETJ5hmWWpN66N" },
    {title: "Star Wars: Episode III - Revenge of the Sith", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojLF3-wggTgaeV6Thxv61fuAvhhf8EGb0yUlCwY7aNhOM9YxY" },
    {title: "Star Wars: Episode II - Attack of the Clones", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFaZwT0BV0T_5fQMPrmzrya0LfLH4EYg-7Q_sPFmw_b59qpxLW" },
    {title: "Star Wars: The Force Awakens", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGQbcpNGARuOe2U8fp-Oczv9L23pBTWvL4R_wYFDlKv4sHS0Io" },        
];

export const useGetMovieDetails = (paramID: string) => {
   
    const [movieDetail, setMovieDetail] = useState<MovieDetailType>();

    const loader = useLoader();
    const getMovieAPIUrl = "http://170.64.165.233/api/movie/getcheapestmovie";

    const fetchMovieDetail = async () => {

        loader?.setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("movieIDs", paramID);

            const requestOptions: RequestInit = {
                method: "POST",
                body: formData,
                redirect: "follow"
            };

            const movieDetailResonse = await fetch(getMovieAPIUrl, requestOptions);

            loader?.setIsLoading(false);

            if (!movieDetailResonse.ok) {
                console.error('Error:', movieDetailResonse.statusText);
                return;
            }

            const movieListData = await movieDetailResonse.json();

            const matchedMoviePoster = moviePosterArray.find(movieToFind => movieToFind.title === movieListData.title);
            movieListData.poster = matchedMoviePoster?.poster;

            setMovieDetail(movieListData);
        } catch(error) {
            loader?.setIsLoading(false);
            return null;
        }
    }

    useEffect(() => {
        fetchMovieDetail();
    }, []);

    return movieDetail;
}