import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #0d0d0d;
  padding: 40px 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 40px;
  position: fixed;
  top: 0%;
  width: 100%;
  background-color: #0d0d0d;

  @media (max-width: "768px") {
    flex-direction: column;
    position: inherit; //this will remove the fixed position of the navbar
  }
`;

export const LogoContainer = styled.div`
  padding-left: 39px;
  padding-top: 12px;
  cursor: pointer;

  @media (max-width: "768px") {
    margin-bottom: 20px;
    padding-left: 10px;
  }
`;

export const StyledImage = styled.img`
  border-radius: 10%;
  margin-left: 10px;
  margin-top: 1px;
  height: 50px;
  width: 100%;

  @media (max-width: "768px") {
    margin: 1px 0;
  }
`;
