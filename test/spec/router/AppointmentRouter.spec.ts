import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../../../src/app";
import { expect } from "chai";

chai.use(chaiHttp);

describe("AppointmentRouter", async () => {
  describe("GET Appointement", () => {
    it("should run HTTP Status 200", async () => {
      return chai
        .request(app)
        .get("/")
        .then(res => {
          console.log(res);
        });
    });
  });
});
