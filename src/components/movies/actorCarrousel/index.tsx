import * as S from "./style";
import { ICastCredits } from "../../../types/ActorCarrouselType";

interface credits {
  credits: ICastCredits[];
  url: string;
}

export const ActingCarrousel = ({ credits, url }: credits) => {
  return (
    <S.Container>
      {credits &&
        credits.length > 1 &&
        credits.map((item, index) => (
          <div key={index}>
            {item.profile_path !== null && (
              <S.Item>
                <img src={`${url}${item.profile_path}`} alt="foto" />
                <span>
                  {item.name} <br />
                  {item.character}
                </span>
              </S.Item>
            )}
          </div>
        ))}
    </S.Container>
  );
};
