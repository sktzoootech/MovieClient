import { useLoader } from "../hooks/useLoader";
import { MovieListType } from "../types/MovieListType";
import { useEffect, useState } from "react";
import { GroupedMovieType } from "../types/GroupedMovieType";

const moviePosterArray = [
    {title: "Star Wars: Episode IV - A New Hope", poster: "https://cdn2.penguin.com.au/covers/original/9781473544888.jpg"},
    {title: "Star Wars: Episode V - The Empire Strikes Back", poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg" },
    {title: "Star Wars: Episode VI - Return of the Jedi", poster: "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg" },
    {title: "Star Wars: Episode I - The Phantom Menace", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnli61uq0mdvdFcDcJGE6VYsl0bBN91XvFX2ETJ5hmWWpN66N" },
    {title: "Star Wars: Episode III - Revenge of the Sith", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojLF3-wggTgaeV6Thxv61fuAvhhf8EGb0yUlCwY7aNhOM9YxY" },
    {title: "Star Wars: Episode II - Attack of the Clones", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFaZwT0BV0T_5fQMPrmzrya0LfLH4EYg-7Q_sPFmw_b59qpxLW" },
    {title: "Star Wars: The Force Awakens", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGQbcpNGARuOe2U8fp-Oczv9L23pBTWvL4R_wYFDlKv4sHS0Io" },        
];

const levenshteinDistance = (a: string, b: string): number => {
    const matrix: number[][] = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = a[j - 1] === b[i - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[b.length][a.length];
}

export const useGetMovieList = () => {
    const [movieList, setMovieList] = useState<GroupedMovieType[]>([]);

    const loader = useLoader();
    const getMovieAPIUrl = "http://170.64.165.233/api/movie/getmovies";
    
    const fetchMovieList = async () => {

        loader?.setIsLoading(true);

        try {
            const movieListResponse = await fetch(getMovieAPIUrl);
            const movieListData = await movieListResponse.json();
    
            loader?.setIsLoading(false);
    
            const groupedMovies: GroupedMovieType[] = movieListData.reduce((groups: GroupedMovieType[], movie: MovieListType) => {
                const existingGroup = groups.find(group => levenshteinDistance(group.title, movie.title) < 3);
            
                if (existingGroup) {
                    existingGroup.ids += `,${movie.id}`;
                } else {
                    const matchMoviePoster = moviePosterArray.find(movieToFind => movieToFind.title === movie.title);
                    groups.push({ title: movie.title, ids: movie.id, poster: matchMoviePoster?.poster });
                }
            
                return groups;
            }, []);
    
            setMovieList(groupedMovies);
        } catch(error) {
            loader?.setIsLoading(false);
            return null;
        }
    }

    useEffect(() => {
        fetchMovieList();
    }, []);

    return movieList;
}
