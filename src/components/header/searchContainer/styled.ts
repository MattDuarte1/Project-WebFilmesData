import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  gap: 20px;

  button {
    background: ${({ theme }) => theme.buttonBackgroundColor};
    color: ${({ theme }) => theme.background};
    cursor: pointer;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 100px;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 1px 2px 2px 0px rgba(1, 1, 1, 0.3);
    outline: none;
    text-align: center;
    transition: filter 0.4s ease;

    @media (max-width: 768px) {
      width: 70px;
      height: 30px;
      font-size: 10px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const InputContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(1, 1, 1, 0.2);

  > span {
    margin-right: 20px;
  }

  input {
    margin-left: 10px;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    box-shadow: none;

    &:active,
    :focus {
      border: none;
      box-shadow: none;
      outline: 0;
    }
  }
`;
