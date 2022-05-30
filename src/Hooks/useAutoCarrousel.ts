import { useState, useEffect } from "react";
import { Imovies } from "../types/moviesCardType";

export const useAutoCarrousel = (
  movies: Imovies,
  time = 1000,
  ref: React.RefObject<any>
) => {
  const [currentSlider, setCurrentSlider] = useState(1);
  const cardRef = ref;

  useEffect(() => {
    const autoPlaySlider = setTimeout(() => {
      if (currentSlider >= movies.results.length) {
        cardRef.current?.scrollBy(-99999, 0);
        setCurrentSlider(1);
      }

      if (currentSlider < movies.results.length) {
        setCurrentSlider((current) => current + 1);
        cardRef.current?.scrollBy(300, 0);
      }
    }, time);

    return () => clearTimeout(autoPlaySlider);
  }, [cardRef, movies.results.length, currentSlider, time]);
};
