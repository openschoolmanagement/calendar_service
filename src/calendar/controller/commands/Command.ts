export class Command {
  requestid: BigInteger;
  method: string;
  commandName: string;
  path: string;
  body: JSON;

  constructor(
    requestid: BigInteger,
    method: string,
    commandName: string,
    path: string,
    body: JSON
  ) {
    this.requestid = requestid;
    this.method = method;
    this.commandName = commandName;
    this.path = path;
    this.body = body;
  }
}
