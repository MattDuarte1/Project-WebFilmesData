import styled from "styled-components";
export const NavWrapper = styled.nav`
  //border: 1px solid red;
  position: relative;
  width: 500px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 50px;

  li {
    height: inherit;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: 800;
    color: ${({ theme }) => theme.menuColor};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: none;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(1, 1, 1, 0.1);
  transition: all 0.4s ease;

  &:hover {
    filter: brightness(0.9);
    background-color: rgba(155, 155, 155, 0.1);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const IconThema = styled.div`
  width: 40px;
  margin-left: 10px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 2px 2px 1px ${({ theme }) => theme.border};
`;
