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

import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';
import { reflexComponent } from '../reflexComponent';

export const DefaultTouchable = reflexComponent<
  // tslint:disable-next-line:no-any
  BuiltInSimpleComponentProps<any> & TouchableWithoutFeedbackProps
>({ name: 'DefaultTouchableChild' })(
  ({ children, complexComponentProps, ...otherProps }) => (
    <TouchableWithoutFeedback {...otherProps}>
      {children}
    </TouchableWithoutFeedback>
  ),
);
