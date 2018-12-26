import { Request } from "express";
import { Command } from "../../controller/commands/Command";

export class CommandConverter {
  convert(commands: JSON): Command[] {
    const commandList: Command[] = [];
    let command: Command;

    commands.forEach(
      (element: {
        requestId: Uint8Array;
        method: string;
        commandname: string;
        path: string;
        body: JSON;
      }) => {
        command = new Command(
          element.requestId,
          element.method,
          element.commandname,
          element.path,
          element.body
        );

        commandList.push(command);
      }
    );

    return commandList;
  }
}
