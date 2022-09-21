import { gql } from "apollo-server-express";
import { PlaceType } from "../../types/commonTypes";

const placeSchema = gql`
  type AdditionalProperty {
    key: String!
    value: String!
  }

  type Place {
    commonName: String!
    lat: String!
    lon: String!
    additionalProperties: [AdditionalProperty]
  }
  type Query {
    getPlaceTypes: [String]
    getPlaces(type: String!): [Place]
  }
`;

const placeResolvers = {
  Query: {
    getPlaceTypes: async (
      _: any,
      __: any,
      {
        dataSources,
      }: {
        dataSources: { PlaceAPI: PlaceType };
      }
    ) => {
      return await dataSources.PlaceAPI.getPlaceTypes();
    },
    getPlaces: async (
      _: any,
      { type }: { type: string },
      {
        dataSources,
      }: {
        dataSources: { PlaceAPI: PlaceType };
      }
    ) => {
      return await dataSources.PlaceAPI.getPlaces(type);
    },
  },
};
export { placeSchema, placeResolvers };
