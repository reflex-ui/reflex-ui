import * as React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import { ReflexSubcomponent } from '../ReflexSubcomponent';

export const DefaultTouchableSubcomponent: React.ComponentType<
  // tslint:disable-next-line:no-any
  ReflexSubcomponent<any> & TouchableWithoutFeedbackProps
> = ({ children, componentProps, ...otherProps }) => (
  <TouchableWithoutFeedback {...otherProps}>
    {children}
  </TouchableWithoutFeedback>
);
