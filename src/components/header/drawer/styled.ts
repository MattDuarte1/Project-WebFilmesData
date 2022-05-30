import styled from "styled-components";

type IContainer = {
  ActivedContainer?: boolean;
};

export const Container = styled.div<IContainer>`
  position: fixed;
  width: ${(props) => (props.ActivedContainer ? "100%" : "0%")};
  display: ${(props) => (props.ActivedContainer ? "block" : "none")};
  background-color: rgba(1, 1, 1, 0.2);
  height: 100vh;
  z-index: 10;
  top: 0;
  right: 0;
  animation: transContainer 0.5s ease-out;

  @keyframes transContainer {
    to {
      width: 100%;
    }

    from {
      width: 0px;
    }
  }
`;

type IDrawer = {
  ActivedDrawer: boolean;
};

export const Drawer = styled.div<IDrawer>`
  position: absolute;
  right: 0;
  top: 0;
  display: ${(props) => (props.ActivedDrawer ? "flex" : "none")};
  justify-content: center;
  height: 1350px;
  width: ${(props) => (props.ActivedDrawer ? "300px" : "0px")};
  background-color: ${({ theme }) => theme.background};
  animation: transDrawer 0.7s ease-in-out;
  z-index: 30;

  > ul {
    margin-top: 55px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    list-style: none;

    li {
      width: inherit;
      font-size: 20px;
      font-weight: 600;
      justify-content: center;
      align-items: center;
      display: flex;
      color: rgba(155, 155, 155, 1);
      border-bottom: 1px solid rgba(1, 1, 1, 0.1);

      span {
        color: ${({ theme }) => theme.menuColor};
        padding: 10px;
      }
    }
  }

  @keyframes transDrawer {
    to {
      width: 300px;
    }

    from {
      width: 0px;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
`;
