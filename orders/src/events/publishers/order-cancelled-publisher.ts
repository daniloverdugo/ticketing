import { Subjects, Publisher, OrderCancelledEvent } from "@dynacodex/common-v3";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
