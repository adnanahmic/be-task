import { Hobby } from "./hobbies.interface";

export interface User {
  _id: string;
  name: string;
  hobbies: Hobby[];
}
