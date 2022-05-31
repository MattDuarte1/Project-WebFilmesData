import { SearchContainerInput } from "./searchContainer";
import * as S from "./styled";
import { Drawer } from "./drawer";
import { useState, useRef } from "react";
import { NavBar } from "./NavBarAndMobile";
import { Itheme } from "../../types/typesTheme";
import { useNavigate } from "react-router-dom";

type ITheme = {
  funcTheme: () => void;
  stateTheme: Itheme;
};

export const Header = ({ funcTheme, stateTheme }: ITheme) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [menuDrawerActived, setMenuDrawerActived] = useState<boolean | false>(
    false
  );

  const handleSearchMovie = () => {
    navigate(`/movie/${inputRef.current?.value}`);
  };

  const handleActiveMenuDrawer = () =>
    menuDrawerActived
      ? setMenuDrawerActived(false)
      : setMenuDrawerActived(true);

  return (
    <>
      <S.Container>
        <SearchContainerInput func={handleSearchMovie} isRef={inputRef} />
        <NavBar
          funcTheme={funcTheme}
          stateTheme={stateTheme}
          funcDrawer={handleActiveMenuDrawer}
        />
      </S.Container>
      <Drawer onClick={handleActiveMenuDrawer} status={menuDrawerActived} />
    </>
  );
};
