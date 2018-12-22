import { Request, Response } from "express";
import { Utilities } from "../../../utils/Utilities";

export class BatchRequestDispatcher {
  handlePutRequest(request: Request): JSON {
    let batchid: number;

    batchid = this.generateBatchId();

    this.cacheBatch(batchid, request);

    return JSON.parse("{}");
  }

  private generateBatchId(): number {
    return Utilities.randomInt(0, Number.MAX_SAFE_INTEGER);
  }

  private cacheBatch(batchid: number, request: Request): void {}
}
