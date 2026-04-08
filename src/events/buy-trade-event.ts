import { Subjects, TradeType } from "./subject";


export interface BuyTradeEvent {
        subject:Subjects.BuyTrade,
        data:{
                userId:string,
                symbol:string,
                type: TradeType,
                quantity:any,
                price:any
        }
} 