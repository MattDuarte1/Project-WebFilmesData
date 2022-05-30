import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  background-color: #292929cc;
  border-radius: 5px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;

  @media (max-width: 1450px) {
    width: 100%;
  }

  @media (max-width: 1036px) {
    flex-direction: column;
    height: 200px;

    h2 {
      font-size: 25px;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    height: 300px;
    width: 100%;

    h2 {
      padding-top: 5px;
      font-size: 35px;
    }
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  height: 150px;
  align-items: center;

  @media (max-width: 1300px) {
    img {
      width: 70px;
    }
  }

  @media (max-width: 1159px) {
    img {
      width: 70px;
    }
  }

  @media (max-width: 970px) {
    img {
      width: 60px;
    }
  }
`;
