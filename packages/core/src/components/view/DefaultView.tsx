/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { BuiltInSimpleComponentProps } from '../BuiltInSimpleComponentProps';
import { processComponent } from '../processComponent';

let DefaultView: React.ComponentType<
  BuiltInSimpleComponentProps<unknown> & ViewProps
> = ({ complexComponentProps, ...otherProps }) => (
  /*
   * otherProps is used to pass lib provided props, users'custom props,
   * as well as to deal with a TouchableWithoutFeedback's issue:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
  <View {...otherProps} />
);

DefaultView = processComponent<
  BuiltInSimpleComponentProps<unknown> & ViewProps
>(DefaultView, {
  name: 'DefaultView',
});

export { DefaultView };
