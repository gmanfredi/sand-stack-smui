import fetch from "node-fetch";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

let defaultOptions;
let graphqlUri;

// gm commented out for temp fix
// TODO Look into getting below code working
// this code can be run on either browser or ssr
// when location is defined we're
// running in the browser
// if (typeof location !== "undefined") {
//   graphqlUri = process.env.SAPPER_APP_GRAPHQL_URI;
//   defaultOptions = {};
// } else {
//   require("dotenv").config();
//   graphqlUri = process.env.SSR_GRAPHQL_URI;
//   defaultOptions = {
//     watchQuery: {
//       fetchPolicy: "no-cache"
//     },
//     query: {
//       fetchPolicy: "no-cache"
//     }
//   };
// }

graphqlUri = "http://localhost:4001/graphql"; // gm added for temp fix TODO: see above

console.log(`Init ApolloClient ${graphqlUri}`);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: graphqlUri,
    fetch
  }),
  defaultOptions
});

export default client;
