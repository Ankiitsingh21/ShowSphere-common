import { Subjects } from "./subject";


type Stock = {
  id: string;
  symbol: string;
  price: number;
  version: number;
  createdAt: string;
  updatedAt: string;
};

export interface SeedEvent{
        subject:Subjects.Seed;
        data:{
                stocks:Stock[]
        }
}