import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../../../src/app";
import { expect } from "chai";

chai.use(chaiHttp);

describe("Appointment Router Test", async () => {
  describe("GET", () => {
    it("should run HTTP Status 200", async () => {
      return chai
        .request(app)
        .get("/api/appointments")
        .then(res => {
          console.log(res);
          expect(res.status).is.eq(200);
        });
    });
    it("should run HTTP Status 200", async () => {
      return chai
        .request(app)
        .post("/api/appointments")
        .then(res => {
          console.log(res);
          expect(res.status).is.eq(200);
        });
    });
  });
});
