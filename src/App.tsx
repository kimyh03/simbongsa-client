import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Router from "./Router";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  min-height: 90vh;
`;

const GET_ISLOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const { data } = useQuery(GET_ISLOGGEDIN);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header isLoggedIn={data?.isLoggedIn} />
      <Wrapper>
        <Router />
        <ToastContainer position={"bottom-left"} />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};
