import * as S from "./styled";
import { MovieCard } from "./cards/index";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ImoviesCards } from "../../../types/moviesCardType";

export const MoviesCards = ({
  setPageNumber,
  pageNumber,
  movies,
  cardRef,
  title,
  titleCategory,
}: ImoviesCards) => {
  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const nextCard = () => {
    cardRef.current?.scrollBy(300, 0);
  };
  const prevCard = () => {
    cardRef.current?.scrollBy(-300, 0);
  };

  return (
    <S.Container id={titleCategory}>
      <S.Wrapper>
        <S.titleCategory>{title}</S.titleCategory>
        <ul ref={cardRef}>
          {movies.results.length > 0 &&
            movies.results.map((item, index) => (
              <MovieCard
                key={index}
                titulo={item.title}
                url={item.backdrop_path}
                id={item.id}
              />
            ))}
          <S.LoadMore onClick={handleNextPage}>+</S.LoadMore>
        </ul>
      </S.Wrapper>
      <S.ButtonsContainer>
        <button onClick={prevCard}>
          <AiOutlineArrowLeft />
        </button>
        <button onClick={nextCard}>
          <AiOutlineArrowRight />
        </button>
      </S.ButtonsContainer>
    </S.Container>
  );
};
