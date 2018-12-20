import { Application, Request, Response, Router } from "express";

export class AppointmentCommandRouter {
  appointmentEventPath = "/events/appointements";
  app: Application;
  constructor(app: Application) {
    this.app = app;
  }
}
