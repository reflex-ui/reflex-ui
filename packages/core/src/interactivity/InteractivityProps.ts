import { TouchableWithoutFeedbackProps } from 'react-native';
import { InteractivityState } from './InteractivityState';

export interface InteractivityProps extends TouchableWithoutFeedbackProps {
  readonly interactivityState?: InteractivityState;
}
