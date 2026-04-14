import { Subjects } from "./subject";


export interface TradeOrderCreatedEvent{
        subject:Subjects.TradeOrderCreated;
        data:{
                orderId:string,
                expiresAt: string
        }
}