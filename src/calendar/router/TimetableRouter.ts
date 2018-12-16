import { Request, Response, Application } from "express";
import { CalendarServiceMainRouter } from "./CalendarServiceMainRouter";

export class TimetableRouter {
  private timetable = CalendarServiceMainRouter.apiBase + "timetable/";

  constructor() {}

  routes(app: Application): void {
    app.route(this.timetable).get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });

    app.route(this.timetable).post((req: Request, res: Response) => {
      res.status(200).send({
        message: "POST request successfulll!!!!"
      });
    });

    app.route(this.timetable).put((req: Request, res: Response) => {
      res.status(200).send({
        message: "PUT request successfulll!!!!"
      });
    });

    app.route(this.timetable).delete((req: Request, res: Response) => {
      res.status(200).send({
        message: "DELETE request successfulll!!!!"
      });
    });

    app.route(this.timetable).patch((req: Request, res: Response) => {
      res.status(200).send({
        message: "PATCH request successfulll!!!!"
      });
    });
  }
}
