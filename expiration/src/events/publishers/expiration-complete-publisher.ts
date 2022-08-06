import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@dynacodex/common-v3";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
