import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { UserProvider } from "./Context";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem("token");
  // return the headers to the context so httpLink can read them

  console.log("token headers:");
  console.log(token);
  console.log("====================================");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
