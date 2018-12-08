class Appointment {
  appointment_id: number;
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
    this.appointment_id = appointmentid;
    this.start = start;
    this.end = end;
    this.duration = end.getMilliseconds() - start.getMilliseconds();
    this.subject = subject;
    this.description = description;
    this.location = location;
    this.owner = owner;
  }
}
