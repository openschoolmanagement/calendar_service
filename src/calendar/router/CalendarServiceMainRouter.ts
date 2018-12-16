import { Request, Response, Application } from "express";
import { AppointmentRouter } from "./AppointmentRouter";

export class CalendarServiceMainRouter {
  static apiBase = "/api/";

  appointmentRouter: AppointmentRouter;

  constructor(appointmentRouter: AppointmentRouter) {
    this.appointmentRouter = appointmentRouter;
  }

  routes(app: Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });

    this.appointmentRouter.routes(app);
  }
}
