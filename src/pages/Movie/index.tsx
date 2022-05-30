import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActingCarrousel } from "../../components/movies/actorCarrousel";
import { MovieCompanies } from "../../components/movies/movieProductionCompanies";
import API_KEY from "../../config/key";
import { ICastCredits } from "../../types/ActorCarrouselType";
import * as S from "./styles";

type Iproduction_companies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

interface iData {
  backdrop_path: string;
  poster_path: string;
  production_companies: Iproduction_companies[];
  title: string;
  original_title: string;
  overview: string;
}

export const Movie = () => {
  const [dataMovie, setDataMovie] = useState<iData>();
  const [credits, setCredits] = useState<ICastCredits[]>([]);
  const url = "https://image.tmdb.org/t/p/w500/";
  const params = useParams();

  useEffect(() => {
    if (dataMovie) {
      fetch(
        `https://api.themoviedb.org/3/movie/${params.slug}/credits?api_key=${API_KEY}&language=pt-BR`
      )
        .then((res) => res.json())
        .then((data) => setCredits(data.cast));
    }
  }, [dataMovie, params.slug]);

  useEffect(() => {
    if (params.slug)
      fetch(
        `https://api.themoviedb.org/3/movie/${params.slug}?api_key=${API_KEY}&language=pt-BR`
      )
        .then((res) => res.json())
        .then((data) => setDataMovie(data));
  }, [params.slug]);

  if (!dataMovie) {
    return (
      <S.Container>
        <h1>Carregando</h1>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Content
        backImage={
          dataMovie.backdrop_path && `${url}${dataMovie?.backdrop_path}`
        }
      >
        <S.Wrapper>
          <S.AsideLeft
            backImage={`${url}${dataMovie?.poster_path}`}
          ></S.AsideLeft>
          <S.AsideRight>
            <h1>{dataMovie.title}</h1>
            <span>
              <h2>Sinopse</h2>
              {dataMovie.overview}
            </span>

            {dataMovie.production_companies.length >= 1 &&
              dataMovie.production_companies[0].logo_path && (
                <MovieCompanies
                  url={url}
                  companiesMovies={dataMovie.production_companies}
                />
              )}
          </S.AsideRight>
        </S.Wrapper>
      </S.Content>
      <h2 style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        Elenco Principal:
      </h2>
      <ActingCarrousel
        credits={credits}
        url={"https://image.tmdb.org/t/p/w500/"}
      />
    </S.Container>
  );
};
