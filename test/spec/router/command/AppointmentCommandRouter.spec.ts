import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../../../../src/app";
import { expect } from "chai";

chai.use(chaiHttp);

describe("Appointment Command Router Test", async () => {
  describe("Command Pattern Test", () => {
    let batchid: string;
    it("should run HTTP Status 200 should return batch request id", async () => {
      return chai
        .request(app)
        .put("/api/command/appointments")
        .send({})
        .then(res => {
          console.log(res);
          expect(res.status).is.eq(200);
          expect(res.body).contains("batchid");
          batchid = res.body.batchid;

          describe("Query for Batch Request Results", () => {
            it("should return batch request id", async () => {
              return chai
                .request(app)
                .get("/api/command/appointments/?batchid=" + batchid)
                .then(res => {
                  console.log(res);
                  expect(res.status).is.eq(200);
                  expect(res.body).contains("batchid");
                });
            });
          });
        });
    });
  });
});
