export enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",

  OrderCreated = "order:created",
  OrderCancelled = "order:cancelled",

  ExpirationComplete = "expiration:complete",

  PaymentCreated = "payment-created",

  UserCreated = "user-created",

  BuyTrade = "buy-trade",
  SellTrade = "sell-trade",
  Seed = "SEED",
  TradeExecuted = "trade:executed",
  TradeOrderCreated = "Trade-order:created"
}

export enum TradeType {
  Buy = "BUY",
  Sell = "SELL",
}

export enum TradeStatus {
  PENDING = "PENDING",
  MATCHED = "MATCHED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
  PARTIAL = "PARTIAL"
}