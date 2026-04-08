export enum Subjects {
  TicketCreated = "ticket:created",
  TicketUpdated = "ticket:updated",

  
  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',

  ExpirationComplete = 'expiration:complete',

  PaymentCreated = 'payment-created',

  UserCreated = 'user-created',

  BuyTrade ='buy-trade',
  SellTrade = 'sell-trade'
}

export enum TradeType{
        Buy="BUY",
        Sell="SELL"
}
