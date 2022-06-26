import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;

const Main = styled.main`
  display: flex;
  width: 65%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 35%;
  overflow-y: scroll;
  background-color: #f5f0fb;
  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const Nav = styled.nav`
  position: fixed;
  width: 35%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.default};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media (max-width: 1024px) {
    width: 100%;
    position: static;
  }
`;

export const Styled = { HomeContainer, Nav, Main };
