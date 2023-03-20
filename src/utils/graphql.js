import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { uri } from "@/graphql/config";

export default new ApolloClient({
  link: new HttpLink({ uri: uri }),
  cache: new InMemoryCache(),
});
