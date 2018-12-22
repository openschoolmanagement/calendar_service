export class CommandResult {
  commandId: BigInteger;
  method: string;
  httpStatus: string;
  path: string;
  body: JSON;

  constructor(
    commandId: BigInteger,
    method: string,
    httpStatus: string,
    path: string,
    body: JSON
  ) {
    this.commandId = commandId;
    this.method = method;
    this.httpStatus = httpStatus;
    this.path = path;
    this.body = body;
  }
}
