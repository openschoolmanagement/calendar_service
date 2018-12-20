export interface CommandResult {
  requestid: BigInteger;
  method: string;
  httpStatus: string;
  path: string;
  body: JSON;
}
