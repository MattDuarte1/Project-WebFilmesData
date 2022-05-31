import * as S from "./styled";
import { BsSearch } from "react-icons/bs";

type Iprops = {
  isRef: React.RefObject<HTMLInputElement>;
  func: () => void;
};

export const SearchContainerInput = ({ isRef, func }: Iprops) => {
  return (
    <S.SearchContainer>
      <S.InputContainer>
        <input ref={isRef} type="text" placeholder="Procure por filmes" />
        <span>
          <BsSearch />
        </span>
      </S.InputContainer>

      <button onClick={func}>Pesquisar</button>
    </S.SearchContainer>
  );
};
