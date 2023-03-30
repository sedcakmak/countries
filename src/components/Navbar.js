import { ReactComponent as moon } from "../images/2.svg";
import styled from "styled-components";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Navbar({ toggleTheme }) {
  const Moon = styled(moon)`
    width: 14px;
    height: 14px;
    & path {
      fill: ${() => (theme === "dark" ? "#FFF" : "#000")};
    }
  `;
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <H1>Where in the World?</H1>
      <Div>
        <Moon />
        <Button onClick={toggleTheme}>
          {theme === "light" ? "Light" : "Dark"} Mode
        </Button>
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 6px 0 hsla(0, 0%, 52%, 0.5);
  padding: 1rem 3rem;
`;

const Button = styled.p`
  border: none;
  background: none;
  vertical-align: top;
  cursor: pointer;
  margin-left: 0.3rem;
`;

const Div = styled.div`
  height: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const H1 = styled.h1`
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
