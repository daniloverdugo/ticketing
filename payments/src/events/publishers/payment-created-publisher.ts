import { Subjects, Publisher, PaymentCreatedEvent } from "@dynacodex/common-v3";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
