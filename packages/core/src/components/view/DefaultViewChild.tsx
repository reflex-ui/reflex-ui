/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { BuiltInChildProps } from '../children/BuiltInChildProps';
import { reflexComponent } from '../reflexComponent';

export const DefaultViewChild = reflexComponent<
  /*
   * it's ok to disable it here as it's a dead end, i.e.
   * it doesn't leak and affect other parts of the codebase.
   */
  // tslint:disable-next-line:no-any
  BuiltInChildProps<any> & ViewProps
>({ name: 'DefaultViewChild' })(
  ({ children, componentProps, ...otherProps }) => (
    /*
     * otherProps is used to pass lib provided props, users'custom props,
     * as well as to deal with a TouchableWithoutFeedback's issue:
     * https://github.com/facebook/react-native/issues/1352
     * It's still an issue. Ref:
     * https://github.com/facebook/react-native/issues/10180
     */
    <View {...otherProps}>{children}</View>
  ),
);
