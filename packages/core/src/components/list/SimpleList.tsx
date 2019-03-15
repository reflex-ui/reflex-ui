/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactIs from 'react-is';
import { ViewProps, ViewStyle } from 'react-native';

import { resolveChildProps } from '../children/resolveChildProps';
import { reflexComponent } from '../reflexComponent';
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

  const patchTheme = props.getPatchTheme && props.getPatchTheme(props);

  let newProps = { ...props, children };
  if (props.theme.getProps || (patchTheme && patchTheme.getProps)) {
    newProps = {
      ...newProps,
      ...((props.theme.getProps && props.theme.getProps(props)) || {}),
      ...((patchTheme && patchTheme.getProps && patchTheme.getProps(props)) ||
        {}),
    };
  }

  const Container =
    (patchTheme && patchTheme.container && patchTheme.container.component) ||
    (newProps.theme.container && newProps.theme.container.component) ||
    DefaultViewChild;

  const containerProps = resolveChildProps<ListProps, ViewProps, ViewStyle>({
    componentProps: newProps,
    patchTheme: patchTheme && patchTheme.container,
    theme: newProps.theme.container,
  });

  return (
    <Container
      componentProps={newProps}
      onLayout={newProps.onLayout}
      {...containerProps}
    >
      {children}
    </Container>
  );
});
