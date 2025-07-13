export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export interface StudentDataType {
  id?: string;
  full_name : string;
  email : string;
  phone : string;
  courses: string;
  department : string;
  date_of_birth : string;
  gender : string;
  terms_and_conditions: boolean;
  studentPhoto: string;
  full_address: string;
  rejected?: boolean;
  pending?: boolean;
}
export interface ResultDataType {
  id?: string;
  userId: string,
  subject: string,
  marks: number,
}