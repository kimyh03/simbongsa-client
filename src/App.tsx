import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router />
    </>
  </ThemeProvider>
);
