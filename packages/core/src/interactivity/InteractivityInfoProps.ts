import { InteractivityEvent } from './InteractivityEvent';
import { InteractivityState } from './InteractivityState';

export interface InteractivityInfoProps {
  readonly interactivityEvent?: InteractivityEvent;
  readonly interactivityState?: InteractivityState;
}
