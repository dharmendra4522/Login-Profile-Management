export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}

enum userStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  salary: number;
  status: userStatus;
}
