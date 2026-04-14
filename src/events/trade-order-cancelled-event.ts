import { Subjects } from "./subject";


export interface TradeOrderCancelledEvent{
        subject:Subjects.TradeOrderCancelled;
        data:{
                orderId:string,
                releaseAmount:number
        }
}