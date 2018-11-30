import * as React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { SubProps } from '../subcomponents/SubProps';

export const DefaultTouchableSubcomponent = reflexComponent<
  // tslint:disable-next-line:no-any
  SubProps<any> & TouchableWithoutFeedbackProps
>({ name: 'DefaultTouchableSubcomponent' })(
  ({ children, componentProps, ...otherProps }) => (
    <TouchableWithoutFeedback {...otherProps}>
      {children}
    </TouchableWithoutFeedback>
  ),
);
