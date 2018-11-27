import * as React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import { SubProps } from '../subcomponents/SubProps';

export const DefaultTouchableSubcomponent: React.ComponentType<
  // tslint:disable-next-line:no-any
  SubProps<any> & TouchableWithoutFeedbackProps
> = ({ children, componentProps, ...otherProps }) => (
  <TouchableWithoutFeedback {...otherProps}>
    {children}
  </TouchableWithoutFeedback>
);
