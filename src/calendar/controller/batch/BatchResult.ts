import { CommandResult } from "../commands/CommandResult";

export class BatchResult {
  batchid: number;
  commandResults: CommandResult[];

  constructor(batchid: number, commandResults: CommandResult[]) {
    this.batchid = batchid;
    this.commandResults = commandResults;
  }
}
