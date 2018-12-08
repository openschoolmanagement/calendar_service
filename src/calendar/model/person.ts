class Person {
  person_id: number;
  email: string;
  firstname: string;
  lastname: string;

  constructor(
    person_id: number,
    email: string,
    firstname: string,
    lastname: string
  ) {
    this.person_id = person_id;
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
