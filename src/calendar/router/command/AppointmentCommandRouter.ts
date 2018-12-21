import { Application, Request, Response, Router } from "express";
import { CalendarServiceMainRouter } from "../CalendarServiceMainRouter";

export class AppointmentCommandRouter {
  appointmentEventPath =
    CalendarServiceMainRouter.apiBase + "/command/appointments";

  router: Router;
  constructor() {
    this.router = Router();
  }

  routes(app: Application) {
    app.use(this.router);
    this.router.put(
      this.appointmentEventPath,
      (req: Request, res: Response) => {
        res.status(200).send({ message: "PUT request successfulll!!!!" });
      }
    );
  }
}
