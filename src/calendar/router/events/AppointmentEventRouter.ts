import { Application, Request, Response, Router } from "express";

export class AppointmentEventRouter {
  appointmentEventPath = "/events/appointements";
  app: Application;
  constructor(app: Application) {
    this.app = app;
  }
}
