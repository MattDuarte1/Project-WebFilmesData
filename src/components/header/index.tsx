import { SearchContainerInput } from "./searchContainer";
import * as S from "./styled";
import { Drawer } from "./drawer";
import { useState } from "react";
import { NavBar } from "./NavBarAndMobile";
import { Itheme } from "../../types/typesTheme";

type ITheme = {
  funcTheme: () => void;
  stateTheme: Itheme;
};

export const Header = ({ funcTheme, stateTheme }: ITheme) => {
  const [menuDrawerActived, setMenuDrawerActived] = useState<boolean | false>(
    false
  );

  const handleActiveMenuDrawer = () =>
    menuDrawerActived
      ? setMenuDrawerActived(false)
      : setMenuDrawerActived(true);

  return (
    <>
      <S.Container>
        <SearchContainerInput />
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
