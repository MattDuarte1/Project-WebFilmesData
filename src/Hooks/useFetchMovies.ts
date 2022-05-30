import { useState, useEffect } from "react";
import API_KEY from "../config/key";

import { Imovies } from "../types/moviesCardType";

export const useFetchMovies = (url: string, language: string) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [movies, setMovies] = useState<Imovies>({
    page: 1,
    total_pages: 982,
    results: [],
  });

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `${url}?api_key=${API_KEY}&language=${language}&page=${pageNumber}`
      );
      const json = await res.json();
      const data = await json;

      setMovies((currentList) => ({
        page: data.page,
        total_pages: data.total_pages,
        results:
          data.page !== currentList.page
            ? [...currentList.results, ...data.results]
            : [...data.results],
      }));
    };

    fetchApi();
  }, [pageNumber, url, language]);

  return { setPageNumber, pageNumber, movies };
};
