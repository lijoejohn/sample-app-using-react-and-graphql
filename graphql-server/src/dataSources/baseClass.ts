import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

class BaseClass extends RESTDataSource {
  constructor() {
    super();
  }
  willSendRequest(request: RequestOptions) {
    const key = process?.env?.PLACE_API_KEY || "";
    request.headers.set("app_key", key);
  }
}
export { BaseClass };
