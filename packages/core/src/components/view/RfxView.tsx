/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { ViewProps, ViewStyle } from 'react-native';

import { resolveChildProps } from '../children';
import { reflexComponent } from '../reflexComponent';
import { DefaultViewChild } from './DefaultViewChild';
import { RfxViewProps } from './RfxViewProps';

export const RfxView = reflexComponent<RfxViewProps>({
  name: 'View',
})((props: RfxViewProps) => {
  const userChildrenProps = props.getProps ? props.getProps(props) : {};

  const children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  const updatedProps = {
    ...props,
    ...userChildrenProps.props,
    children,
  };

  const Container = updatedProps.theme.container.component || DefaultViewChild;

  const containerProps = resolveChildProps<RfxViewProps, ViewProps, ViewStyle>({
    componentProps: updatedProps,
    theme: updatedProps.theme.container,
    userProps: userChildrenProps.container,
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
