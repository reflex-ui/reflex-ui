/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { reflexComponent } from '../../reflexComponent';

export interface ContainerStyle {
  readonly container: ViewStyle;
}

const styles: ContainerStyle = StyleSheet.create<ContainerStyle>({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export const RowView = reflexComponent<ViewProps>({ name: 'RowView' })(
  ({ children, style }) => (
    <View style={[styles.container, style]}>{children}</View>
  ),
);
