import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";
import Dropdown from "./components/Dropdown";
import CountryPage from "./components/CountryPage";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [countries, setCountries] = useState("");
  const [filterCountry, setFilterCountry] = useState(countries);
  const [region, setRegion] = useState();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{
          theme,
          countries,
          setCountries,
          filterCountry,
          setFilterCountry,
          region,
          setRegion,
        }}
      >
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Navbar
            toggleTheme={toggleTheme}
            theme={theme}
          />
          <Section>
            <SearchBar
              countries={countries}
              setCountries={setCountries}
              filterCountry={filterCountry}
              setFilterCountry={setFilterCountry}
              theme={theme}
            />
            <Dropdown
              theme={theme}
              countries={countries}
              region={region}
              setRegion={setRegion}
            />
          </Section>
          <Div>
            <Routes>
              <Route
                path="/"
                element={
                  <Cards
                    theme={theme}
                    countries={countries}
                    setCountries={setCountries}
                    filterCountry={filterCountry}
                    region={region}
                  />
                }
              />
              <Route
                path="/:name"
                element={<CountryPage countries={countries} />}
              />
            </Routes>
          </Div>
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0 0 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
