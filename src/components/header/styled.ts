import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  height: 50px;
  position: absolute;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%);
  z-index: 20;
  box-shadow: 0px 5px 10px 0px ${({ theme }) => theme.border};

  @media (max-width: 1200px) {
    width: 800px;
  }

  @media (max-width: 768px) {
    width: 400px;
  }
`;
