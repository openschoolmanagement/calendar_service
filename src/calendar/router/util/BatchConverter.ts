import { BatchRequest } from "../../controller/batch/BatchRequest";

export class BatchConverter {
  static convertFromBody(request: Request): BatchRequest {
    request.body;

    return new BatchRequest();
  }
}
