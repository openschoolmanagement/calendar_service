import { CommandResult } from "../commands/CommandResult";

export interface BatchResult {
  batchid: number;
  commandResults: CommandResult[];
}
