import { Subjects } from "./subject";


type Stock = {
  id: string;
  symbol: string;
  price: any;
  version: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface SeedEvent{
        subject:Subjects.Seed;
        data:{
                stocks:Stock[]
        }
}