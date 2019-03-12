/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Text, TextProps } from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { SubProps } from '../subcomponents/SubProps';

export const DefaultTextChild = reflexComponent<
  /*
   * it's ok to disable it here as it's a dead end, i.e.
   * it doesn't leak and affect other parts of the codebase.
   */
  // tslint:disable-next-line:no-any
  SubProps<any> & TextProps
>({ name: 'DefaultTextChild' })(
  ({ children, componentProps, ...otherProps }) => (
    <Text {...otherProps}>{children}</Text>
  ),
);
