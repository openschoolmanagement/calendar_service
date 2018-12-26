import { BatchRequest } from "../../controller/batch/BatchRequest";
import { CommandConverter } from "./CommandConverter";
import { Command } from "../../controller/commands/Command";
import { Utilities } from "../../../utils/Utilities";
export class BatchConverter {
  static createFromBody(body: JSON): BatchRequest {
    const batchrequestid = BatchConverter.generateBatchId();

    // tslint:disable-next-line:no-any
    let commandBody: any;
    commandBody = body;
    const commandsJson: JSON = commandBody.commands;
    const listOfCommands: Command[] = CommandConverter.convert(commandsJson);

    return new BatchRequest(batchrequestid, listOfCommands);
  }

  private static generateBatchId(): number {
    return Utilities.randomInt(0, Number.MAX_SAFE_INTEGER);
  }
}
