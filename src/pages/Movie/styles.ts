import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  height: 100vh;
  width: 100%;

  @media (max-width: 375px) {
    width: 385px;
  }
`;

export const Content = styled.div<IProps>`
  margin: 0 auto;
  display: flex;
  width: 90%;
  border-radius: 10px;
  background-image: url(${(props) => props.backImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  min-height: 700px;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    rgba(0, 174, 201, 0.3) 150px,
    rgba(57, 160, 237, 0.9) 100%
  );

  @media (max-width: 915px) {
    flex-direction: column;
    height: 980px;
  }

  @media (max-width: 855px) {
    flex-direction: column;
    height: 949px;
  }

  @media (max-width: 854px) {
    flex-direction: column;
    height: 1010px;
  }

  @media (max-width: 610px) {
    flex-direction: column;
    height: 1030px;
  }

  @media (max-width: 515px) {
    flex-direction: column;
    height: 1100px;
  }
`;

type IProps = {
  backImage: string;
};

export const AsideLeft = styled.aside<IProps>`
  border: 8px solid white;
  box-shadow: 2px 2px 5px 0 rgba(1, 1, 1, 0.2),
    -2px -2px 5px 0 rgba(1, 1, 1, 0.2);
  border-radius: 10px;
  width: 30%;
  min-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.backImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 915px) {
    min-width: 0px;
    width: 100%;
    height: 500px;
    margin-bottom: 50px;
  }
`;

export const AsideRight = styled.aside`
  display: flex;
  margin: 0 25px;
  color: ${({ theme }) => theme.text};
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;

  h1 {
    font-size: 35px;
  }
  h2 {
    margin-bottom: 15px;
  }

  span {
    text-align: center;
  }

  @media (max-width: 1072px) {
    h1 {
      text-align: center;
      font-size: 25px;
    }

    h2 {
      font-size: 18px;
    }

    span {
      font-size: small;
    }
  }

  @media (max-width: 915px) {
    width: 100%;
    justify-content: space-between;
    height: 150px;
    margin: 0;

    h1 {
      font-size: 50px;
    }
    h2 {
      margin-bottom: 35px;
    }

    span {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
    height: 100px;
    margin: 0;

    h1 {
      text-align: center;
      font-size: 20px;
    }
    h2 {
      margin-top: 25px;
      margin-bottom: 10px;
    }

    span {
      font-size: 15px;
      text-align: center;
    }
  }
`;
