/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactIs from 'react-is';
import { ViewProps, ViewStyle } from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { getSubProps } from '../subcomponents';
import { DefaultViewChild } from '../view';
import { ListProps } from './ListProps';

export const SimpleList = reflexComponent<ListProps>({
  name: 'SimpleList',
})((props: ListProps) => {
  let children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  if (ReactIs.isFragment(children) && children.props) {
    children = children.props.children;
  }

  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};

  const updatedProps = {
    ...props,
    children,
  };

  const Container = updatedProps.theme.container.component || DefaultViewChild;

  const containerProps = getSubProps<ListProps, ViewProps, ViewStyle>({
    componentProps: updatedProps,
    theme: updatedProps.theme.container,
    userProps: userSubProps.container,
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
