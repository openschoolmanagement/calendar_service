import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import { AppointmentRouter } from "./calendar/router/AppointmentRouter";
import { CalendarServiceMainRouter } from "./calendar/router/CalendarServiceMainRouter";
import { AppointmentCommandRouter } from "./calendar/router/command/AppointmentCommandRouter";

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  app: express.Application;
  routeProvider!: CalendarServiceMainRouter;

  // Run configuration methods on the Express instance.
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
    this.routeProvider = new CalendarServiceMainRouter(
      new AppointmentRouter(),
      new AppointmentCommandRouter()
    );
    this.routeProvider.routes(this.app);
  }
}
// tslint:disable-next-line:no-default-export
export default new App().app;
