import { Publisher, OrderCreatedEvent, Subjects } from "@dynacodex/common-v3";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
