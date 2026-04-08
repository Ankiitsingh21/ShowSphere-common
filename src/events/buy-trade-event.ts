import { Subjects, TradeType } from "./subject";


export interface BuyTrade {
        subject:Subjects.BuyTrade,
        data:{
                userId:string,
                symbol:string,
                type: TradeType,
                quantity:any,
                price:any
        }
} 