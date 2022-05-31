import * as S from "./style";
import { Iresults } from "../../../types/MovieSearchType";
import { useNavigate } from "react-router-dom";

interface Idata {
  data: Iresults;
}

export const CardSearch = ({ data }: Idata) => {
  const navigate = useNavigate();
  return (
    <>
      {data.poster_path && (
        <S.CardMovie onClick={() => navigate(`/movie/${data.id}`)}>
          <S.LogoCard>
            <img
              src={` https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt=""
              width={100}
            />
          </S.LogoCard>
          <S.CardDescription>
            <h1>{data.title}</h1>
            <span>{data.release_date}</span>
            <p>{data.overview.slice(0, 650)}...</p>
          </S.CardDescription>
        </S.CardMovie>
      )}
    </>
  );
};
