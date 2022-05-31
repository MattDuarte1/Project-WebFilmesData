import styled from "styled-components";

export const CardMovie = styled.div`
  display: flex;
  gap: 25px;
  background-color: white;
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 10px;
  box-shadow: 1px 4px 8px 1px rgba(1, 1, 1, 0.1);
  width: 80%;
  padding: 10px;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    box-shadow: 1px 4px 8px 1px rgba(1, 1, 1, 0.3);
  }

  @media (max-width: 500px) {
    width: 380px;
    margin: 0 25px;
  }
`;

export const LogoCard = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 5px;
  }

  @media (max-width: 500px) {
    height: 100%;
  }
`;

export const CardDescription = styled.div`
  h1 {
    margin-top: 10px;
    width: 100%;
    margin-bottom: 5px;
  }

  span {
    color: #999;
  }

  p {
    margin-top: 15px;
    font-size: 16px;
  }
`;
