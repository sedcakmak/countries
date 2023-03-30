import { useState, useContext } from "react";
import { ThemeContext } from "../App";
import styled from "styled-components";

export default function Dropdown() {
  const [display, setDisplay] = useState();
  const { theme, countries, region, setRegion } = useContext(ThemeContext);
  const [height, setHeight] = useState();
  const [filteredRegion, setFilteredRegion] = useState();

  const Ul = styled.ul`
    list-style-type: none;
    height: ${height || 0};
    position: absolute;
    background: ${() => (theme === "light" ? "#FFF" : "hsl(209, 23%, 22%)")};
    width: 141px;
    border-radius: 6px;
    margin-top: 0.1rem;
    box-shadow: 0 0 6px 0 hsla(0, 0%, 52%, 0.5);
    transition: height 5s ease-in;
    & li {
      opacity: ${display || 0};
      padding: 0.7rem 0 0 1rem;
      transition: opacity 2s ease-in;
      &:hover {
        cursor: pointer;
        background: ${() =>
          theme === "dark"
            ? " hsla(0, 0%, 98%, 0.5)"
            : " hsla(0, 0%, 52%, 0.5)"};
      }
    }
  `;

  const Button = styled.button`
    background: ${() => (theme === "light" ? "#FFF" : "hsl(209, 23%, 22%)")};
    color: ${() => (theme === "light" ? "hsl(209, 23%, 22%)" : "#FFF")};
    padding: 1rem;
    border: none;
    border-radius: 6px;
    box-shadow: 0 0 6px 0 hsla(0, 0%, 52%, 0.5);
    font-family: "Nunito Sans", sans-serif;
    &:hover {
      cursor: pointer;
    }
  `;

  function handleClick() {
    height === "160px" ? setHeight("0") : setHeight("160px");
  }

  function changeOpacity() {
    display === "1" ? setDisplay("0") : setDisplay("1");
  }

  function filterRegion(e) {
    let result = [];
    countries.map((country) => {
      return country.region === e.currentTarget.id
        ? result.push(country)
        : null;
    });
    setRegion(result);
  }

  return (
    <Div>
      <Button
        onClick={() => {
          handleClick();
          changeOpacity();
        }}
      >
        Filter by Region &#9660;
      </Button>
      <Ul>
        <li
          id="Africa"
          onClick={(e) => {
            filterRegion(e);
          }}
        >
          Africa
        </li>
        <li
          id="Americas"
          onClick={(e) => {
            filterRegion(e);
          }}
        >
          America
        </li>
        <li
          id="Asia"
          onClick={(e) => {
            filterRegion(e);
          }}
        >
          Asia
        </li>
        <li
          id="Europe"
          onClick={(e) => {
            filterRegion(e);
          }}
        >
          Europe
        </li>
        <li
          id="Oceania"
          onClick={(e) => {
            filterRegion(e);
          }}
        >
          Oceania
        </li>
      </Ul>
    </Div>
  );
}

const Div = styled.div`
  margin-right: 3rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;
