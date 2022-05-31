import * as S from "./styled";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { BsFilm, BsGithub } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";

interface Idata {
  status: boolean;
  onClick?: () => void;
}

export const Drawer = ({ status = false, onClick }: Idata) => {
  return (
    <>
      <S.Container onClick={onClick} ActivedContainer={status}></S.Container>
      <S.Drawer ActivedDrawer={status}>
        <S.CloseButton onClick={onClick}>
          <AiOutlineClose size={35} color={"rgba(155,155,155,1)"} />
        </S.CloseButton>
        <ul>
          <li>
            <AiFillHome />
            <span>
              <Link onClick={onClick} to="/">
                Home
              </Link>
            </span>
          </li>
          <li>
            <BsFilm />

            <span>
              <a onClick={onClick} href="#categorias">
                Filmes
              </a>
            </span>
          </li>
          <li>
            <MdCategory />
            <span>
              <a onClick={onClick} href="#categorias">
                Categorias
              </a>
            </span>
          </li>
          <li>
            <BsGithub />
            <span>
              <a href="https://github.com/MattDuarte1/Project-WebFilmesData">
                Github
              </a>
            </span>
          </li>
        </ul>
      </S.Drawer>
    </>
  );
};
