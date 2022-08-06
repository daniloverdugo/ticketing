import { Publisher, Subjects, TicketCreatedEvent } from '@dynacodex/common-v3';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
