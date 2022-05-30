import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 520px;
  width: 935px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: animeLeft 0.5s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  input {
    display: none;
  }

  /* #slide1:checked ~ .s1 {
    transform: translateY(0%);
  }

  #slide2:checked ~ .s1 {
    transform: translateY(-100%);
  }

  #slide3:checked ~ .s1 {
    transform: translateY(-200%);
  }

  #slide4:checked ~ .s1 {
    transform: translateY(-300%);
  }

  #slide5:checked ~ .s1 {
    transform: translateY(-400%);
  } */
`;

interface Islider {
  translaterY: number;
}

export const Slide = styled.div<Islider>`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateY(-${(props) => props.translaterY}%);

  img {
    width: 60%;
    height: inherit;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export const InfoSlide = styled.div`
  background: ${({ theme }) => theme.sliderInfoBackground};
  padding-top: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 25px;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: white;
    width: inherit;
    text-align: center;

    font-size: large;
  }

  h2 {
    text-align: center;
    margin-top: 20px;
    color: white;
    font-size: medium;
  }

  span {
    text-align: center;
    margin-top: 5px;
    font-size: 20px;
    color: white;

    @media (max-width: 600px) {
      text-align: start;
      font-size: 10px;
    }
  }
`;

export const Navigation = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
`;

interface Iprops {
  checked: boolean;
}

export const PointerSlides = styled.label<Iprops>`
  width: 70px;
  height: 17px;
  border: 2px solid #fff;
  margin: 6px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: ${({ checked }) => checked && "white"};

  &:hover {
    background-color: white;
  }
`;
