import { Publisher, Subjects, TicketUpdatedEvent } from '@dynacodex/common-v3';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
