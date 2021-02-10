import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { onError } from "@apollo/client/link/error";

import { UserProvider } from "./Context";

const httpLink = new HttpLink({
  uri: "https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const middleError = onError(({ networkError }) => {
  if (networkError) sessionStorage.removeItem("token");
  window.location = "/user";
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, middleError, httpLink]),
});

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
