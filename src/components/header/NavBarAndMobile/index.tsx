import { RiMenu2Line } from "react-icons/ri";
import * as S from "./styled";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { light } from "../../../themes/light";
import { Itheme } from "../../../types/typesTheme";
import { Link } from "react-router-dom";

type IfuncDrawer = {
  funcDrawer: () => void;
  funcTheme: () => void;
  stateTheme: Itheme;
};

export const NavBar = ({ funcDrawer, funcTheme, stateTheme }: IfuncDrawer) => {
  return (
    <S.NavWrapper>
      <S.NavLinks>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <a href="#categorias">Filmes</a>
        </li>
        <li>
          <a href="#categorias">Categorias</a>
        </li>
        <li>
          <a href="https://github.com/MattDuarte1/Project-WebFilmesData">
            GITHUB
          </a>
        </li>
      </S.NavLinks>
      <S.IconThema>
        {stateTheme === light ? (
          <MdModeNight
            color={stateTheme.iconThemeColor}
            onClick={funcTheme}
            size={25}
          />
        ) : (
          <MdLightMode
            color={stateTheme.iconThemeColor}
            onClick={funcTheme}
            size={25}
          />
        )}
      </S.IconThema>
      <S.MenuMobile onClick={funcDrawer}>
        <RiMenu2Line color="#00aec9" size={35} />
      </S.MenuMobile>
    </S.NavWrapper>
  );
};
