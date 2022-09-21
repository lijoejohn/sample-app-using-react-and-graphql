import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer, AuthenticationError, gql } from "apollo-server-express";
import express from "express";
import http from "http";
import { PlaceAPI, placeResolvers, placeSchema } from "./dataSources/places/";
import { PlaceType } from "./types/commonTypes";

const schema = makeExecutableSchema({
  typeDefs: [placeSchema],
  resolvers: [placeResolvers],
});

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
      return {
        PlaceAPI: new PlaceAPI(),
      };
    },
    context: ({ req }) => {
      // get the user token from the headers
      const token = req.headers.authorization || "";
      // optionally block the user
      // we could also check user roles/permissions here
      if (!token) throw new AuthenticationError("you must be logged in");
      // add the user to the context
      return { token };
    },
  });
  await server.start();
  server.applyMiddleware({ app, path: "/" });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer();
