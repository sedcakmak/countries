import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../App";

export default function CountryPage() {
  let theCountry = window.location.pathname.substring(1);
  const { countries } = useContext(ThemeContext);

  if (countries.length > 0)
    return countries.map((country) => {
      const border = country.borders.map((border) => border.split(""));
      console.log(border);
      return (
        country.name.common === theCountry && (
          <>
            <Div>
              <button>Back</button>
              <Img
                src={country.flags.png}
                alt={country.flags.alt}
              />
            </Div>
            <Div2>
              <h1>{country.name.common}</h1>
              <p>
                <span>Native Name: </span> {country.name.nativeName.official}
              </p>
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
              <p>
                <span>Top Level Domain: </span> {country.tld}
              </p>
              {/* <p>
                <span>Currencies: </span> {country.currencies[0]}
              </p>
              <p>
                <span>Languages: </span>
                {country.languages}
              </p> */}
              <h2>Border Countries: {}</h2>
            </Div2>
          </>
        )
      );
    });
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Div = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  border: 1px solid red;
  line-height: 2;
`;
