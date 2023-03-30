import { useState, useContext } from "react";
import { ThemeContext } from "../App";
import styled from "styled-components";

export default function SearchBar() {
  // the value of the search field
  const [name, setName] = useState("");
  const { theme, countries, setFilterCountry } = useContext(ThemeContext);
  const inputStyle = {
    padding: "1rem 2rem",
    width: "30%",
    background: theme === "light" ? "#FFF" : "hsl(209, 23%, 22%)",
    color: theme === "light" ? "hsl(209, 23%, 22%)" : "#FFF",
    /* border: none; */
    borderRadius: "6px",
  };

  // the search result

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFilterCountry(results);
    } else {
      setFilterCountry(countries);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <Div>
      <label>
        <input
          style={inputStyle}
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder=" Search for a country..."
        />
      </label>
    </Div>
  );
}

const Div = styled.div`
  /* margin: 2rem 0 0 2rem; */
  flex-grow: 2;
`;
