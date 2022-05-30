import { MoviesCards } from "../../components/movies/moviesCards";
import { useRef, useState, useEffect } from "react";

import { Slider } from "../../components/slider";
import API_KEY from "../../config/key";
import { ITopRateFilms } from "../../types/sliderType";

import { useAutoCarrousel } from "../../Hooks/useAutoCarrousel";
import { useFetchMovies } from "../../Hooks/useFetchMovies";

const Home = () => {
  const [topRatesFilmes, setTopRatesFilmes] = useState<ITopRateFilms[]>([]);
  const popularCardRef = useRef<HTMLUListElement>(null);
  const upComingCardRef = useRef<HTMLUListElement>(null);
  const fetchPopularMovies = useFetchMovies(
    `https://api.themoviedb.org/3/movie/popular`,
    "pt-BR"
  );

  const fetchUpComingMovies = useFetchMovies(
    "https://api.themoviedb.org/3/movie/upcoming",
    "pt-BR"
  );

  const popularData = {
    setPageNumber: fetchPopularMovies.setPageNumber,
    pageNumber: fetchPopularMovies.pageNumber,
    cardRef: popularCardRef,
    movies: fetchPopularMovies.movies,
  };
  const upComingData = {
    setPageNumber: fetchUpComingMovies.setPageNumber,
    pageNumber: fetchUpComingMovies.pageNumber,
    cardRef: upComingCardRef,
    movies: fetchUpComingMovies.movies,
  };

  useEffect(() => {
    const getTopRateFilms = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`
      );

      const json = await res.json();
      const resultado = json.results;
      const fiveItems = resultado.slice(0, 5);
      setTopRatesFilmes(fiveItems);
    };

    getTopRateFilms();
  }, []);

  useAutoCarrousel(fetchPopularMovies.movies, 2000, popularCardRef);
  useAutoCarrousel(fetchUpComingMovies.movies, 2000, upComingCardRef);

  return (
    <>
      <Slider data={topRatesFilmes} />
      <MoviesCards title="Filmes Populares" {...popularData} />
      <MoviesCards
        titleCategory={"categorias"}
        title="Próximos Lançamentos"
        {...upComingData}
      />
    </>
  );
};

export default Home;
