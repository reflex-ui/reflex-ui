import * as React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import { ReflexSubcomponent } from '../../ReflexSubcomponent';
import { ButtonProps } from '../ButtonProps';

export const DefaultButtonTouchable: React.ComponentType<
  ReflexSubcomponent<ButtonProps> & TouchableWithoutFeedbackProps
> = ({ children, componentProps, ...otherProps }) => (
  <TouchableWithoutFeedback {...otherProps}>
    {children}
  </TouchableWithoutFeedback>
);
