import { Subjects, TradeType } from "./subject";

export interface TradeExecutedEvent {
  subject: Subjects.TradeExecuted;
  data: {
    orderId: string;
    userId: string;
    symbol: string;
    matchedQty: any;
    tradePrice: any;
    type: TradeType;
    releaseAmount?: any;
  };
}
