import { Subjects, TradeType } from "./subject";

export interface SellTradeEvent {
  subject: Subjects.SellTrade;
  data: {
    userId: string;
    symbol: string;
    price: any;
    quantity: any;
    type: TradeType;
  };
}
