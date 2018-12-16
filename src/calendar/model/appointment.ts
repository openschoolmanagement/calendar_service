class Appointment {
  appointmentid: number;
  start: Date;
  end: Date;
  duration: number;
  subject: string;
  description: string;
  location: string;
  owner: Person;

  constructor(
    appointmentid: number,
    start: Date,
    end: Date,
    subject: string,
    description: string,
    location: string,
    owner: Person
  ) {
    this.appointmentid = appointmentid;
    this.start = start;
    this.end = end;
    this.duration = end.getMilliseconds() - start.getMilliseconds();
    this.subject = subject;
    this.description = description;
    this.location = location;
    this.owner = owner;
  }
}
