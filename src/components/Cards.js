import axios from "axios";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../App";

export default function Cards() {
  const { theme, countries, setCountries, filterCountry, region } =
    useContext(ThemeContext);

  let navigate = useNavigate();

  const Div = styled.div`
    background: ${() => (theme === "light" ? "#FFF" : "hsl(209, 23%, 22%)")};
    width: 280px;
    height: 386px;
    margin: 2rem;
    &:hover {
      cursor: pointer;
    }
  `;

  const Div2 = styled.div`
    padding: 2rem;
    line-height: 2;
  `;

  const url = "https://restcountries.com/v3.1/all";

  const getAllCountries = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allCountries = response.data;
        setCountries(allCountries);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllCountries();
  }, []);
  if (!region && !filterCountry && countries.length > 0) {
    console.log(countries);
    return countries
      .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
      .map((country) => {
        return (
          <Div
            key={country.name.common}
            onClick={() => navigate(`${country.altSpellings[0]}`)}
          >
            <img
              src={country.flags.png}
              alt={country.flags.alt}
            />
            <Div2>
              <H1>{country.name.common}</H1>
              <p>
                <span>Population: </span> {country.population}
              </p>
              <p>
                <span>Region: </span> {country.region}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </Div2>
          </Div>
        );
      });
  } else if (region) {
    return region.map((country) => (
      <Div
        key={country.name.official}
        onClick={() => navigate(`${country.altSpellings[0]}`)}
      >
        <img
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <Div2>
          <H1>{country.name.common}</H1>
          <p>
            <span>Population: </span> {country.population}
          </p>
          <p>
            <span>Region: </span> {country.region}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
        </Div2>
      </Div>
    ));
  } else if (filterCountry)
    return filterCountry.map((country) => (
      <Div
        key={country.name}
        onClick={() => navigate(`${country.altSpellings[0]}`)}
      >
        <img
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <Div2>
          <H1>{country.name.common}</H1>
          <p>
            <span>Population: </span> {country.population}
          </p>
          <p>
            <span>Region: </span> {country.region}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
        </Div2>
      </Div>
    ));
}
const H1 = styled.h1`
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 1rem;
`;
