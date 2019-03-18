/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactIs from 'react-is';

import { extractPropsFromTheme } from '../extractPropsFromTheme';
import { mergeThemes } from '../mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { DefaultView } from '../view/DefaultView';
import { AppBarProps } from './AppBarProps';

export const renderCenterArea = (props: AppBarProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children || !Array.isArray(children) || children.length < 2) {
    return undefined;
  }

  const Container =
    (theme.centerArea && theme.centerArea.component) || DefaultView;

  const containerProps = extractPropsFromTheme(props, theme.centerArea);

  return (
    <Container complexComponentProps={props} {...containerProps}>
      {children[1]}
    </Container>
  );
};

export const renderLeadingArea = (props: AppBarProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children) return children;
  // if (typeof children === 'function') return children(props);
  const leadingChildren = Array.isArray(children) ? children[0] : children;

  const Container =
    (theme.leadingArea && theme.leadingArea.component) || DefaultView;

  const containerProps = extractPropsFromTheme(props, theme.leadingArea);

  return (
    <Container complexComponentProps={props} {...containerProps}>
      {leadingChildren}
    </Container>
  );
};

export const renderTrailingArea = (props: AppBarProps): React.ReactNode => {
  const { children, theme } = props;
  if (!children || !Array.isArray(children) || children.length < 3) {
    return undefined;
  }

  const Container =
    (theme.trailingArea && theme.trailingArea.component) || DefaultView;

  const containerProps = extractPropsFromTheme(props, theme.trailingArea);

  return (
    <Container complexComponentProps={props} {...containerProps}>
      {children[2]}
    </Container>
  );
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

  let newProps = props;
  let mergedTheme = props.theme;

  if (
    props.getPatchTheme ||
    props.theme.getProps ||
    typeof props.children === 'function'
  ) {
    mergedTheme = mergeThemes(
      props.theme,
      props.getPatchTheme && props.getPatchTheme(props),
    );

    newProps = {
      ...newProps,
      ...((mergedTheme.getProps && mergedTheme.getProps(props)) || {}),
      children,
      theme: mergedTheme,
    };
  }

  const Container =
    (mergedTheme.container && mergedTheme.container.component) || DefaultView;

  const containerProps = extractPropsFromTheme(newProps, mergedTheme.container);

  return (
    <Container
      complexComponentProps={newProps}
      onLayout={newProps.onLayout}
      {...containerProps}
    >
      {renderLeadingArea(newProps)}
      {renderCenterArea(newProps)}
      {renderTrailingArea(newProps)}
    </Container>
  );
});
