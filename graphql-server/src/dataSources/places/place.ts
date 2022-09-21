import { BaseClass } from "../baseClass";
import { PlaceType } from "../../types/commonTypes";

class PlaceAPI extends BaseClass implements PlaceType {
  constructor() {
    super();
  }
  async getPlaceTypes() {
    // Send a GET request to the specified endpoint
    this.baseURL = "https://api.tfl.gov.uk/Place/Meta/";
    const data = await this.get("PlaceTypes");
    return data;
  }
  async getPlaces(type: string) {
    // Send a GET request to the specified endpoint
    this.baseURL = "https://api.tfl.gov.uk/Place/Type/";
    const data = await this.get(`${type}`);
    return data;
  }
}
export { PlaceAPI };
