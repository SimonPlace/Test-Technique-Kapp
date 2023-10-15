import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #1c4a47;
  padding: 20px 0;
`;

const Header = () => (
  <StyledHeader>
    <img src="/images/LogoKapptivate.svg" alt="Kapptivate" />
  </StyledHeader>
);

export default Header;
