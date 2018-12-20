export interface Command {
  requestid: BigInteger;
  method: string;
  path: string;
  body: JSON;
}
