import { Application, Request, Response, Router } from "express";

import { CalendarServiceMainRouter } from "./CalendarServiceMainRouter";

export class AppointmentRouter {
  private appointmentPath = CalendarServiceMainRouter.apiBase + "/appointments";
  private router: Router;
  constructor() {
    this.router = Router();
  }

  routes(app: Application): void {
    app.use(this.router);

    this.router.get(this.appointmentPath, (req: Request, res: Response) => {
      console.log(this.appointmentPath);
      res.status(200).send({ message: "GET request successfulll!!!!" });
    });

    this.router.post(this.appointmentPath, (req: Request, res: Response) => {
      res.status(200).send({ message: "POST request successfulll!!!!" });
    });

    this.router.put(this.appointmentPath, (req: Request, res: Response) => {
      res.status(200).send({ message: "PUT request successfulll!!!!" });
    });

    this.router.delete(this.appointmentPath, (req: Request, res: Response) => {
      res.status(200).send({ message: "DELETE request successfulll!!!!" });
    });

    this.router.patch(this.appointmentPath, (req: Request, res: Response) => {
      res.status(200).send({ message: "PATCH request successfulll!!!!" });
    });
  }
}
