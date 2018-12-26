import { Request } from "express";
import { Command } from "../../controller/commands/Command";

export class CommandConverter {
  convert(commands: JSON): Command[] {
    let commandList: Command[] = [];

    commands.forEach(element => {});

    return commandList;
  }
}
