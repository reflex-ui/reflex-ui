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
import { DefaultViewChild } from '../view/DefaultViewChild';
import { AppBarProps } from './AppBarProps';
import { AppBarSubProps } from './AppBarSubProps';

export const renderCenterArea = (
  props: AppBarProps,
  userSubProps: AppBarSubProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 1) {
    const Container = props.theme.centerArea.component || DefaultViewChild;

    const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
      componentProps: props,
      theme: props.theme.centerArea,
      userProps: userSubProps.centerArea,
    });

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
  userSubProps: AppBarSubProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;
  if (typeof children === 'function') return children(props);
  const leadingChildren = Array.isArray(children) ? children[0] : children;

  const Container = props.theme.leadingArea.component || DefaultViewChild;

  const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.leadingArea,
    userProps: userSubProps.leadingArea,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {leadingChildren}
    </Container>
  );
};

export const renderTrailingArea = (
  props: AppBarProps,
  userSubProps: AppBarSubProps,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 2) {
    const Container = props.theme.trailingArea.component || DefaultViewChild;

    const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
      componentProps: props,
      theme: props.theme.trailingArea,
      userProps: userSubProps.trailingArea,
    });

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

  const userSubProps = props.getSubProps ? props.getSubProps(props) : {};

  const updatedProps = {
    ...props,
    children,
  };

  const Container = updatedProps.theme.container.component || DefaultViewChild;

  const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
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
      {renderLeadingArea(updatedProps, userSubProps)}
      {renderCenterArea(updatedProps, userSubProps)}
      {renderTrailingArea(updatedProps, userSubProps)}
    </Container>
  );
});
