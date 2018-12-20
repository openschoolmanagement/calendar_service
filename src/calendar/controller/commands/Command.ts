export interface Command {
  requestid: BigInteger;
  method: string;
  commandName: string;
  path: string;
  body: JSON;
}
