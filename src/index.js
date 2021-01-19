import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { UserProvider } from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql",
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
