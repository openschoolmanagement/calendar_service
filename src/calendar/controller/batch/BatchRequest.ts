import { Command } from "../commands/Command";

export interface BatchRequest {
  commands: Command[];
}
