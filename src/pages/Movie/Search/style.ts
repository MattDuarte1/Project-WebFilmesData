import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
`;

export const Wrapper = styled.ul`
  display: flex;
  height: 900px;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AsideLeft = styled.aside`
  width: 30%;
  display: flex;
  justify-content: center;

  @media (max-width: 980px) {
    width: 100%;
  }
`;

export const WrapperContentLeft = styled.div`
  width: 260px;
  height: 465px;
  border: 1px solid #eee;
  box-shadow: 0 5px 5px 0px rgba(1, 1, 1, 0.1);
  border-radius: 15px;
  @media (max-width: 980px) {
    display: none;
  }
  h3 {
    text-align: center;
    border-top-left-radius: 15px;
    color: ${({ theme }) => theme.text};
    border-top-right-radius: 15px;
    padding: 15px;
    background-color: ${({ theme }) => theme.buttonBackgroundColor};
  }

  ul {
    width: 100%;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      color: black;
      font-size: 16px;
      padding: 10px 20px;
      cursor: pointer;

      span {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 10px;
        padding: 0px 10px;
      }

      &:hover {
        font-weight: 800;
        background-color: #eee;
      }
    }
  }
`;

export const AsideRight = styled.aside`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 980px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
