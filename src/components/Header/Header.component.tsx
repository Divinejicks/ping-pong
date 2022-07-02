import {
  LogoContainer,
  StyledHeader,
  StyledImage,
  StyledNav,
} from "./Header.styled";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <LogoContainer>
            <StyledImage src="/my_logo.PNG" alt="Logo" />
          </LogoContainer>
        </StyledNav>
      </StyledHeader>
    </>
  );
}
