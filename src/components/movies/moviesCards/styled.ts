import styled from "styled-components";

export const Container = styled.section`
  background: ${({ theme }) => theme.cardsBackground};
  padding: 20px;
`;

export const Wrapper = styled.div`
  ul {
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    display: flex;
    gap: 25px;
    list-style: none;
    padding: 20px;
    cursor: pointer;

    ::-webkit-scrollbar {
      background: transparent;
    }
  }
`;

export const titleCategory = styled.h1`
  margin-left: 20px;
  font-size: x-large;
  color: ${({ theme }) => theme.heading};
`;

export const LoadMore = styled.button`
  min-width: 250px;
  border-radius: 8px;
  font-size: xx-large;
  color: ${({ theme }) => theme.heading};
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0.2px 0.5px 2px 0 ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  margin-top: -15px;

  button {
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.buttonBackgroundColor};
    border: 1px solid ${({ theme }) => theme.border};
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    & + button {
      margin-left: 5px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
`;
