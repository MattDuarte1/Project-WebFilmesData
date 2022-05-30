import * as S from "./style";
import { IData } from "../../../types/moviesCompaniesType";

export const MovieCompanies = ({ companiesMovies, url }: IData) => {
  return (
    <S.Container>
      <h2>Produtoras:</h2>
      <S.Content>
        {companiesMovies.map((item, index) => (
          <S.Item key={index}>
            {item.logo_path && (
              <img
                src={`${url}${item.logo_path}`}
                alt={item.name}
                width={100}
              />
            )}
          </S.Item>
        ))}
      </S.Content>
    </S.Container>
  );
};
