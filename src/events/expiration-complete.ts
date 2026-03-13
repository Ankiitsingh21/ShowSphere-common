import { Subjects } from "./subject";


export interface ExpirationComplete{
        subject:Subjects.ExpirationComplete;
        data:{
                orderId:string;
        }
}