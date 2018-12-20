import { Application, Request, Response, Router } from "express";

import { CalendarServiceMainRouter } from "./CalendarServiceMainRouter";

export class AppointmentRouter {
  private appointmentPath = CalendarServiceMainRouter.apiBase + "appointments";
  private appointmentRouter: Router;
  constructor() {
    this.appointmentRouter = Router();
  }

  routes(app: Application): void {
    app.use(this.appointmentRouter);

    this.appointmentRouter.get(
      this.appointmentPath,
      (req: Request, res: Response) => {
        res.status(200).send({ message: "GET request successfulll!!!!" });
      }
    );

    this.appointmentRouter.post(
      this.appointmentPath,
      (req: Request, res: Response) => {
        res.status(200).send({ message: "POST request successfulll!!!!" });
      }
    );

    this.appointmentRouter.put(
      this.appointmentPath,
      (req: Request, res: Response) => {
        res.status(200).send({ message: "PUT request successfulll!!!!" });
      }
    );

    this.appointmentRouter.delete(
      this.appointmentPath,
      (req: Request, res: Response) => {
        res.status(200).send({ message: "DELETE request successfulll!!!!" });
      }
    );

    this.appointmentRouter.patch(
      this.appointmentPath,
      (req: Request, res: Response) => {
        res.status(200).send({ message: "PATCH request successfulll!!!!" });
      }
    );
  }
}
