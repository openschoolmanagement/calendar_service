import { Application, Request, Response } from "express";

import { AppointmentRouter } from "./AppointmentRouter";
import { AppointmentCommandRouter } from "./command/AppointmentCommandRouter";

export class CalendarServiceMainRouter {
  static apiBase = "/api";

  appointmentRouter: AppointmentRouter;
  appointmentCommandRouter: AppointmentCommandRouter;

  constructor(
    appointmentRouter: AppointmentRouter,
    appointmentCommandRouter: AppointmentCommandRouter
  ) {
    this.appointmentRouter = appointmentRouter;
    this.appointmentCommandRouter = appointmentCommandRouter;
  }

  routes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request successfulll!!!!" });
    });

    this.appointmentRouter.routes(app);
    this.appointmentCommandRouter.routes(app);
  }
}
