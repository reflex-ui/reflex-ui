/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { SubProps } from '../subcomponents/SubProps';

export const DefaultViewSubcomponent = reflexComponent<
  // tslint:disable-next-line:no-any
  SubProps<any> & ViewProps
>({ name: 'DefaultViewSubcomponent' })(
  ({
    children,
    componentProps,
    /*
   * This is used to pass lib provided props, users'custom props,
   * as well as to deal with a TouchableWithoutFeedback's issue:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
    ...otherProps
    /**/
  }) => <View {...otherProps}>{children}</View>,
);
