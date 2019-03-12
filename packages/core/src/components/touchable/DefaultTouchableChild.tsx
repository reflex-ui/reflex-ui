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

import { BuiltInChildProps } from '../children/BuiltInChildProps';
import { reflexComponent } from '../reflexComponent';

export const DefaultTouchableChild = reflexComponent<
  // tslint:disable-next-line:no-any
  BuiltInChildProps<any> & TouchableWithoutFeedbackProps
>({ name: 'DefaultTouchableChild' })(
  ({ children, componentProps, ...otherProps }) => (
    <TouchableWithoutFeedback {...otherProps}>
      {children}
    </TouchableWithoutFeedback>
  ),
);
