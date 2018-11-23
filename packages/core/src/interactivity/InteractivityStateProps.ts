import { InteractivityState } from './InteractivityState';

export interface InteractivityStateProps {
  readonly interactivityState: InteractivityState;
}

export type OptionalInteractivityStateProps = Partial<InteractivityStateProps>;
