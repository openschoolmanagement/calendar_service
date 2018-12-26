import * as mocha from "mocha";
import * as chai from "chai";
import * as fs from "fs";

import { BatchConverter } from "../../../../src/calendar/router/util/BatchConverter";

describe("Batch Converter Test", async () => {
  describe("Convert Request Body into Batch Request Object", () => {
    it("should convert Request Body into Batch Request Object ", async () => {
      let testdata: string;
      await fs.readFile(
        "../../../ressources/BatchRequest.json",
        (err, data) => {
          testdata = data.toString();
        }
      );
    });
    it("should run HTTP Status 200", async () => {});
  });
});
