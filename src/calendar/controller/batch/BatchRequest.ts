import { Command } from "../commands/Command";

export class BatchRequest {
  commands: Command[];

  constructor(commands: Command[]) {
    this.commands = commands;
  }
}
