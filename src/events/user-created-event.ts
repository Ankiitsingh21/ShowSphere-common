import { Subjects } from "./subject";

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    userID: string;
  };
}
