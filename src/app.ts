import * as express from "express";
import * as path from "path";

import * as bodyParser from "body-parser";
import { CalendarServiceMainRouter } from "./calendar/router/CalendarServiceMainRouter";
import { AppointmentRouter } from "./calendar/router/AppointmentRouter";

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  app: express.Application;
  routeProvider!: CalendarServiceMainRouter;

  //Run configuration methods on the Express instance.
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    this.routeProvider = new CalendarServiceMainRouter(new AppointmentRouter());
    this.routeProvider.routes(this.app);
  }
}
// tslint:disable-next-line:no-default-export
export default new App().app;
