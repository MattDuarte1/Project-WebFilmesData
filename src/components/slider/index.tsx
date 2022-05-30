import { useEffect, useState } from "react";
import * as S from "./styled";
import { Islider } from "./type";

export const Slider = ({ data }: Islider) => {
  const [checkBoxSelected, setCheckBoxSelected] = useState<number>(0);
  const [translaterY, setTranslaterY] = useState<number>(0);
  const [autoSliderActived, setAutoSliderActived] = useState<Boolean>(true);

  useEffect(() => {
    switch (checkBoxSelected) {
      case 1:
        return setTranslaterY(0);
      case 2:
        return setTranslaterY(100);
      case 3:
        return setTranslaterY(200);
      case 4:
        return setTranslaterY(300);
      case 5:
        return setTranslaterY(400);
      default:
        return setTranslaterY(0);
    }
  }, [checkBoxSelected]);

  useEffect(() => {
    const autoSlider = setTimeout(() => {
      if (autoSliderActived && checkBoxSelected < 5) {
        setCheckBoxSelected(checkBoxSelected + 1);
      } else if (checkBoxSelected >= 5) {
        setCheckBoxSelected(1);
      }
    }, 2000);

    return () => clearTimeout(autoSlider);
  }, [checkBoxSelected, autoSliderActived]);

  return (
    <S.Container
      onMouseEnter={() => setAutoSliderActived(false)}
      onMouseLeave={() => setAutoSliderActived(true)}
    >
      <S.Content>
        {data &&
          data.map((item, index) => (
            <S.Slide key={index} translaterY={translaterY}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt="Batman"
              />
              <S.InfoSlide>
                <h1>{item.title}</h1>
                <h2>Sinopse</h2>
                <span>{item.overview}</span>
              </S.InfoSlide>
            </S.Slide>
          ))}
        <S.Navigation>
          <S.PointerSlides
            onClick={() => {
              setTranslaterY(0);
              setCheckBoxSelected(1);
            }}
            checked={checkBoxSelected === 1}
            htmlFor="slide1"
          ></S.PointerSlides>
          <S.PointerSlides
            onClick={() => {
              setTranslaterY(100);
              setCheckBoxSelected(2);
            }}
            checked={checkBoxSelected === 2}
            htmlFor="slide2"
          ></S.PointerSlides>
          <S.PointerSlides
            onClick={() => {
              setTranslaterY(200);
              setCheckBoxSelected(3);
            }}
            checked={checkBoxSelected === 3}
            htmlFor="slide3"
          ></S.PointerSlides>
          <S.PointerSlides
            onClick={() => {
              setTranslaterY(300);
              setCheckBoxSelected(4);
            }}
            checked={checkBoxSelected === 4}
            htmlFor="slide4"
          ></S.PointerSlides>
          <S.PointerSlides
            onClick={() => {
              setTranslaterY(400);
              setCheckBoxSelected(5);
            }}
            checked={checkBoxSelected === 5}
            htmlFor="slide5"
          ></S.PointerSlides>
        </S.Navigation>
      </S.Content>
    </S.Container>
  );
};
