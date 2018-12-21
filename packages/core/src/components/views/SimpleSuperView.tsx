/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { ViewProps, ViewStyle } from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { getSubProps } from '../subcomponents';
import { SuperViewProps } from './SuperViewProps';

export const SimpleSuperView = reflexComponent<SuperViewProps>({
  name: 'SimpleReflexView',
})((props: SuperViewProps) => {
  const userProps = props.getProps ? props.getProps(props) : {};

  const children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  const updatedProps = {
    ...props,
    ...userProps.props,
    children,
  };

  const Container = updatedProps.theme.container.component;

  const containerProps = getSubProps<SuperViewProps, ViewProps, ViewStyle>({
    componentProps: updatedProps,
    theme: updatedProps.theme.container,
    userProps: userProps.container,
  });

  return (
    <Container
      componentProps={updatedProps}
      onLayout={updatedProps.onLayout}
      {...containerProps}
    >
      {children}
    </Container>
  );
});

/*
import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { reflexComponent } from '../reflexComponent';

export interface ContainerStyle {
  readonly container: ViewStyle;
}

const styles: ContainerStyle = StyleSheet.create<ContainerStyle>({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export const Row = reflexComponent<ViewProps>({ name: 'Row' })(
  ({ children, style }) => (
    <View style={[styles.container, style]}>{children}</View>
  ),
);
*/
