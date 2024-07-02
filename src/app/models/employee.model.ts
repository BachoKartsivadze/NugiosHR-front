export interface Employee {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  age: number;
  company: string;
  city: string;
  workType: string;
  gender: string;
  marriageStatus: string;
  supervisor: string;
  office: string;
  [key: string]: string | number; // Index signature to allow dynamic keys
}
