import {Application, Request, Response} from 'express';

import {CalendarServiceMainRouter} from './CalendarServiceMainRouter';

export class MeetingRouter {
  private meetingPath = CalendarServiceMainRouter.apiBase + 'meeting/';

  constructor() {}

  routes(app: Application): void {
    app.route(this.meetingPath).get((req: Request, res: Response) => {
      res.status(200).send({message: 'GET request successfulll!!!!'});
    });

    app.route(this.meetingPath).post((req: Request, res: Response) => {
      res.status(200).send({message: 'POST request successfulll!!!!'});
    });

    app.route(this.meetingPath).put((req: Request, res: Response) => {
      res.status(200).send({message: 'PUT request successfulll!!!!'});
    });

    app.route(this.meetingPath).delete((req: Request, res: Response) => {
      res.status(200).send({message: 'DELETE request successfulll!!!!'});
    });

    app.route(this.meetingPath).patch((req: Request, res: Response) => {
      res.status(200).send({message: 'PATCH request successfulll!!!!'});
    });
  }
}
