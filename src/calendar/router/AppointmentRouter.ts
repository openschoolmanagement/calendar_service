import {Application, Request, Response} from 'express';

import {CalendarServiceMainRouter} from './CalendarServiceMainRouter';

export class AppointmentRouter {
  private appointmentPath = CalendarServiceMainRouter.apiBase + 'appointement/';

  constructor() {}

  routes(app: Application): void {
    app.route(this.appointmentPath).get((req: Request, res: Response) => {
      res.status(200).send({message: 'GET request successfulll!!!!'});
    });

    app.route(this.appointmentPath).post((req: Request, res: Response) => {
      res.status(200).send({message: 'POST request successfulll!!!!'});
    });

    app.route(this.appointmentPath).put((req: Request, res: Response) => {
      res.status(200).send({message: 'PUT request successfulll!!!!'});
    });

    app.route(this.appointmentPath).delete((req: Request, res: Response) => {
      res.status(200).send({message: 'DELETE request successfulll!!!!'});
    });

    app.route(this.appointmentPath).patch((req: Request, res: Response) => {
      res.status(200).send({message: 'PATCH request successfulll!!!!'});
    });
  }
}
