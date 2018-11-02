import { TouchableWithoutFeedbackProps } from 'react-native';
import {
  InteractivityStateProps,
  OptionalInteractivityStateProps,
} from './InteractivityStateProps';

export interface InteractivityProps
  extends InteractivityStateProps,
    TouchableWithoutFeedbackProps {}

export interface OptionalInteractivityProps
  extends OptionalInteractivityStateProps,
    TouchableWithoutFeedbackProps {}
