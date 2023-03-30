import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  toggleBorder: "#FFF",
  background: "#363537",
  boxShadow: "0 0 6px 0 hsla(0, 0%, 52%, 0.5)",
};

export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  toggleBorder: "#6B8096",
  background: "#999",
  filter: "brightness(0) invert(1)",
};

const GlobalStyle = createGlobalStyle`

html {
--darkBlue: hsl(209, 23%, 22%) //(Dark Mode Elements)
--veryDarkBlue: hsl(207, 26%, 17%) // (Dark Mode Background)
--veryDarkBlueLight: hsl(200, 15%, 8%) //(Light Mode Text)
--darkGray: hsl(0, 0%, 52%) // (Light Mode Input)
--veryLightGray: hsl(0, 0%, 98%) // (Light Mode Background)
--white: hsl(0, 0%, 100%) // (Dark Mode Text & Light Mode Elements)
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 1s;
  }

  span{
    font-weight: 800;
  }

  img {
    width:100%;
    height: 50%;
  }

 input::placeholder {
  color: ${({ theme }) => theme.text};
 }

 input {
  padding: 10px 5px 10px 20px;
  text-indent: 20px;
  border:none;
  box-shadow: ${({ theme }) => theme.boxShadow} ;
 }

 label {
  position: relative;
}

label:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 40px;
filter: ${({ theme }) => theme.filter};

    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
   }

     @media (max-width: 768px) {
      label {
        width: 100%;
      }
input{
  width:94% !important
}

     }


`;

export default GlobalStyle;
