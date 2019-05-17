/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Ref } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

import { extractTouchableWithoutFeedbackProps } from '../../utils/props';
import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';

export const renderTouchableComponent = <
  ComponentProps extends TouchableWithoutFeedbackProps &
    Readonly<{ children?: React.ReactNode }>
>(
  props: ComponentProps,
  Component:
    | typeof TouchableWithoutFeedback
    | React.ComponentType<BuiltInSimpleComponentProps<ComponentProps>> &
        TouchableWithoutFeedbackProps = TouchableWithoutFeedback,
  ref?: Ref<TouchableWithoutFeedback>,
): JSX.Element => {
  const touchableProps = extractTouchableWithoutFeedbackProps(props);

  if (Component === TouchableWithoutFeedback) {
    return (
      <Component ref={ref} {...touchableProps}>
        {props.children}
      </Component>
    );
  }

  return (
    <Component complexComponentProps={props} {...touchableProps}>
      {props.children}
    </Component>
  );
};
