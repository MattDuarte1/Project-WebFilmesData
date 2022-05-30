import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardFilm = styled.li`
  background-color: white;
  width: 350px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  transition: transform 0.5s ease;
  scroll-snap-align: start;

  &:hover {
    transform: scale(1.1);
  }

  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 350px;
  }

  h1 {
    padding-top: 5px;
    text-align: center;
  }
`;

type movieProps = {
  titulo: string;
  url?: string;
  id: string;
};
export const MovieCard = ({ titulo, url, id }: movieProps) => {
  const navigate = useNavigate();
  return titulo && url && id ? (
    <CardFilm onClick={() => navigate(`/movie/${id}`)}>
      <img src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" />
      <h1>{titulo}</h1>
    </CardFilm>
  ) : (
    <CardFilm>Carregando</CardFilm>
  );
};
