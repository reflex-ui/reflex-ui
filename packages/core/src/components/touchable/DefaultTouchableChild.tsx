/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { SubProps } from '../subcomponents/SubProps';

export const DefaultTouchableChild = reflexComponent<
  // tslint:disable-next-line:no-any
  SubProps<any> & TouchableWithoutFeedbackProps
>({ name: 'DefaultTouchableChild' })(
  ({ children, componentProps, ...otherProps }) => (
    <TouchableWithoutFeedback {...otherProps}>
      {children}
    </TouchableWithoutFeedback>
  ),
);
