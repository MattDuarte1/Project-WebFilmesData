import API_KEY from "../../../config/key";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./style";
import { CardSearch } from "../../../components/movies/cardsSearch";
import { IMoviesSearch } from "../../../types/MovieSearchType";

export const SearchMovie = () => {
  const params = useParams();
  const [dadosMovie, setDadosMovie] = useState<IMoviesSearch>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${params.slug}`
    )
      .then((res) => res.json())
      .then((data) => setDadosMovie(data));
  }, [params.slug]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.AsideLeft>
          <S.WrapperContentLeft>
            <h3>Resultado da Busca</h3>
            <ul>
              <li>
                Filmes <span>{dadosMovie?.total_results}</span>
              </li>
              <li>Séries</li>
              <li>Pessoas</li>
              <li>Produtoras</li>
              <li>Palavras-chave</li>
              <li>Coletâneas</li>
              <li>Emissoras</li>
            </ul>
          </S.WrapperContentLeft>
        </S.AsideLeft>
        <S.AsideRight>
          {dadosMovie?.results.map((item, index) => (
            <CardSearch key={index} data={item} />
          ))}
        </S.AsideRight>
      </S.Wrapper>
    </S.Container>
  );
};
