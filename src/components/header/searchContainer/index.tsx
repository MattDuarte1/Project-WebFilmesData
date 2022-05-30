import * as S from "./styled";
import { BsSearch } from "react-icons/bs";

export const SearchContainerInput = () => {
  return (
    <S.SearchContainer>
      <S.InputContainer>
        <input type="text" placeholder="Procure por filmes" />
        <span>
          <BsSearch />
        </span>
      </S.InputContainer>

      <button>Pesquisar</button>
    </S.SearchContainer>
  );
};
