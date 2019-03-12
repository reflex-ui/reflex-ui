/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactIs from 'react-is';
import { ViewProps, ViewStyle } from 'react-native';

import { resolveChildProps } from '../children';
import { reflexComponent } from '../reflexComponent';
import { DefaultViewChild } from '../view';
import { ListItemProps } from './ListItemProps';

export const SimpleListItem = reflexComponent<ListItemProps>({
  name: 'SimpleListItem',
})((props: ListItemProps) => {
  let children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  if (ReactIs.isFragment(children) && children.props) {
    children = children.props.children;
  }

  const userChildrenProps = props.getChildrenProps
    ? props.getChildrenProps(props)
    : {};

  const updatedProps = {
    ...props,
    children,
  };

  const Container = updatedProps.theme.container.component || DefaultViewChild;

  const containerProps = resolveChildProps<ListItemProps, ViewProps, ViewStyle>(
    {
      componentProps: updatedProps,
      theme: updatedProps.theme.container,
      userProps: userChildrenProps.container,
    },
  );

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
