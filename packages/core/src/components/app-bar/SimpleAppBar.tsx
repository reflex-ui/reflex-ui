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
import { DefaultViewChild } from '../view/DefaultViewChild';
import { AppBarChildrenProps } from './AppBarChildrenProps';
import { AppBarProps } from './AppBarProps';

export const renderCenterArea = (
  props: AppBarProps,
  userChildrenProps: AppBarChildrenProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 1) {
    const Container = props.theme.centerArea.component || DefaultViewChild;

    const containerProps = resolveChildProps<AppBarProps, ViewProps, ViewStyle>(
      {
        componentProps: props,
        theme: props.theme.centerArea,
        userProps: userChildrenProps.centerArea,
      },
    );

    return (
      <Container componentProps={props} {...containerProps}>
        {children[1]}
      </Container>
    );
  }

  return undefined;
};

export const renderLeadingArea = (
  props: AppBarProps,
  userChildrenProps: AppBarChildrenProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;
  if (typeof children === 'function') return children(props);
  const leadingChildren = Array.isArray(children) ? children[0] : children;

  const Container = props.theme.leadingArea.component || DefaultViewChild;

  const containerProps = resolveChildProps<AppBarProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.leadingArea,
    userProps: userChildrenProps.leadingArea,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {leadingChildren}
    </Container>
  );
};

export const renderTrailingArea = (
  props: AppBarProps,
  userChildrenProps: AppBarChildrenProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 2) {
    const Container = props.theme.trailingArea.component || DefaultViewChild;

    const containerProps = resolveChildProps<AppBarProps, ViewProps, ViewStyle>(
      {
        componentProps: props,
        theme: props.theme.trailingArea,
        userProps: userChildrenProps.trailingArea,
      },
    );

    return (
      <Container componentProps={props} {...containerProps}>
        {children[2]}
      </Container>
    );
  }

  return undefined;
};

export const SimpleAppBar = reflexComponent<AppBarProps>({
  name: 'SimpleAppBar',
})((props: AppBarProps) => {
  let children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  if (ReactIs.isFragment(children) && children.props) {
    children = children.props.children;
  }

  if (Array.isArray(children) && children.length > 3) {
    throw new Error(
      [
        'SimpleAppBar.children cannot take more than 3 top-level nodes. ',
        'You probably forgot to wrap some components into e.g. a <Row>.',
      ].join(''),
    );
  }

  const userChildrenProps = props.getChildrenProps
    ? props.getChildrenProps(props)
    : {};

  const updatedProps = {
    ...props,
    children,
  };

  const Container = updatedProps.theme.container.component || DefaultViewChild;

  const containerProps = resolveChildProps<AppBarProps, ViewProps, ViewStyle>({
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
      {renderLeadingArea(updatedProps, userChildrenProps)}
      {renderCenterArea(updatedProps, userChildrenProps)}
      {renderTrailingArea(updatedProps, userChildrenProps)}
    </Container>
  );
});
