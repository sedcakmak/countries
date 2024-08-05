import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../App";
import data from "../data/data.json";

export default function CountryPage() {
  // console.log(data[21]);
  let navigate = useNavigate();
  let theCountry = window.location.pathname.substring(1);
  const { countries } = useContext(ThemeContext);

  if (countries.length > 0)
    return countries.map((country) => {
      return (
        country.altSpellings[0] === theCountry && (
          <>
            <div>
              <Button onClick={() => navigate("/")}> &#8592; Back</Button>
              <Img
                src={country.flags.png}
                alt={country.flags.alt}
              />
            </div>
            <Div3>
              <Div2>
                <h1>{country.name.common}</h1>
                <p>
                  <span>Native Name: </span>{" "}
                  {Object.values(country.name.nativeName)[0].common}
                </p>
                <p>
                  <span>Population: </span> {country.population}
                </p>
                <p>
                  <span>Region: </span> {country.region}
                </p>

                <p>
                  <span>Sub Region: </span> {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
                <P>
                  <span>Top Level Domain: </span> {country.tld}
                </P>
                <p>
                  <span>Currencies: </span>{" "}
                  {Object.values(country.currencies)[0].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {Object.values(country.languages).join(", ")}
                </p>
              </Div2>

              <LastP>
                <span>Border Countries: </span>
                {country.borders && Object.values(country.borders).join(", ")}
              </LastP>
            </Div3>
          </>
        )
      );
    });
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
`;
const P = styled.p`
  margin-top: 60px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 200px;
  line-height: 2;
`;

const LastP = styled.p`
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: white;
  padding: 0.5rem 2rem;
  border-radius: 6px;
  box-shadow: 0 0 7px 0 hsla(0, 0%, 52%, 0.5);
  margin: 40px 0;
  border: none;
  cursor: pointer;
`;
