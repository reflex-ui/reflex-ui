import { InteractivityEvent } from './InteractivityEvent';
import { InteractivityType } from './InteractivityType';

export interface InteractivityState {
  readonly event?: InteractivityEvent;
  readonly type: InteractivityType;
}
