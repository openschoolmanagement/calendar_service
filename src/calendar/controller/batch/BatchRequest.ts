import { Command } from "../commands/Command";

export class BatchRequest {
  batchRequestId: number;
  commands: Command[];

  constructor(batchRequestId: number, commands: Command[]) {
    this.commands = commands;
    this.batchRequestId = batchRequestId;
  }
}
