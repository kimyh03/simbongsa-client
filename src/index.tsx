import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import Client from "./Apollo/Client";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
