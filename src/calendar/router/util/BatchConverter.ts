import { BatchRequest } from "../../controller/batch/BatchRequest";
import { Request } from "express";
import { CommandConverter } from "./CommandConverter";
import { Command } from "../../controller/commands/Command";
export class BatchConverter {
  // static convertFromBody(request: Request): BatchRequest {
  // const commandList: Command[] = CommandConverter.convert(request);
  // const batchRequest = new BatchRequest(commandList);
  //
  // return batchRequest;
  // }
}
