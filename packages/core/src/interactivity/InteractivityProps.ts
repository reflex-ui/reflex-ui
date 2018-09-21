import { TouchableWithoutFeedbackProps } from 'react-native';
import { InteractivityStateProps } from './InteractivityStateProps';

export interface InteractivityProps
  extends InteractivityStateProps,
    TouchableWithoutFeedbackProps {}
