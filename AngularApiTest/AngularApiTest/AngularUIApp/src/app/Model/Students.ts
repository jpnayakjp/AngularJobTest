export class Students {
  name: string | undefined;
  age: number | undefined;
  hobbies: string[] | undefined;
}
export class StudentDetails {
  students: Students[] = new Array<Students>;
}
