export interface CommandResult {
  commandId: BigInteger;
  method: string;
  httpStatus: string;
  path: string;
  body: JSON;
}
