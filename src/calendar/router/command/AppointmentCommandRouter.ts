import { Application, Request, Response, Router } from "express";
import { CalendarServiceMainRouter } from "../CalendarServiceMainRouter";
import { AppointmentRouter } from "../AppointmentRouter";
import { BatchRequestDispatcher } from "../../controller/batch/BatchRequestDispatcher";

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
        const batchRequestDispatcher = new BatchRequestDispatcher();
        batchRequestDispatcher.handlePutRequest(req);
      }
    );
  }
}
