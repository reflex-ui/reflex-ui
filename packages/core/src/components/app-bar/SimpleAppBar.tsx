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
import { DefaultViewChild } from '../view/DefaultViewChild';
import { AppBarProps } from './AppBarProps';
import { AppBarTheme } from './AppBarTheme';

export const renderCenterArea = (
  props: AppBarProps,
  patchTheme: AppBarTheme | undefined,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 1) {
    const Container =
      (patchTheme &&
        patchTheme.centerArea &&
        patchTheme.centerArea.component) ||
      (props.theme.centerArea && props.theme.centerArea.component) ||
      DefaultViewChild;

    const containerProps = resolveChildProps<
      AppBarProps,
      ViewProps,
      ViewStyle
      // tslint:disable-next-line:ter-func-call-spacing
    >({
      componentProps: props,
      patchTheme: patchTheme && patchTheme.centerArea,
      theme: props.theme.centerArea,
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
  patchTheme: AppBarTheme | undefined,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;
  if (typeof children === 'function') return children(props);
  const leadingChildren = Array.isArray(children) ? children[0] : children;

  const Container =
    (patchTheme &&
      patchTheme.leadingArea &&
      patchTheme.leadingArea.component) ||
    (props.theme.leadingArea && props.theme.leadingArea.component) ||
    DefaultViewChild;

  const containerProps = resolveChildProps<AppBarProps, ViewProps, ViewStyle>({
    componentProps: props,
    patchTheme: patchTheme && patchTheme.leadingArea,
    theme: props.theme.leadingArea,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {leadingChildren}
    </Container>
  );
};

export const renderTrailingArea = (
  props: AppBarProps,
  patchTheme: AppBarTheme | undefined,
): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 2) {
    const Container =
      (patchTheme &&
        patchTheme.trailingArea &&
        patchTheme.trailingArea.component) ||
      (props.theme.trailingArea && props.theme.trailingArea.component) ||
      DefaultViewChild;

    const containerProps = resolveChildProps<
      AppBarProps,
      ViewProps,
      ViewStyle
      // tslint:disable-next-line:ter-func-call-spacing
    >({
      componentProps: props,
      patchTheme: patchTheme && patchTheme.trailingArea,
      theme: props.theme.trailingArea,
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

  const containerProps = resolveChildProps<AppBarProps, ViewProps, ViewStyle>({
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
      {renderLeadingArea(newProps, patchTheme)}
      {renderCenterArea(newProps, patchTheme)}
      {renderTrailingArea(newProps, patchTheme)}
    </Container>
  );
});
