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
import { AppBarProps } from './AppBarProps';

/*
const styles = StyleSheet.create({
  centerArea: {
    alignSelf: 'flex-end', // prominent
    flexDirection: 'row',
    marginBottom: 10, // prominent
    marginLeft: 20,
  },
  container: {
    // alignItems: 'center', // default
    alignItems: 'flex-start', // prominent
    backgroundColor: '#9898ff',
    flex: 1,
    flexDirection: 'row',
    // flexGrow: 1, // old, delete
    // height: 56, // default
    height: 128, // prominent
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  leadingArea: {
    flexDirection: 'row',
  },
  trailingArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
*/

export const renderCenterArea = (props: AppBarProps): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 1) {
    const Container = props.theme.centerArea.component;

    const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
      componentProps: props,
      theme: props.theme.centerArea,
      // userProps: userSubProps.centerArea,
    });

    return (
      <Container componentProps={props} {...containerProps}>
        {children[1]}
      </Container>
    );
  }

  return undefined;
};

export const renderLeadingArea = (props: AppBarProps): React.ReactNode => {
  const { children } = props;
  if (!children) return children;
  if (typeof children === 'function') return children(props);
  const leadingChildren = Array.isArray(children) ? children[0] : children;

  const Container = props.theme.leadingArea.component;

  const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.leadingArea,
    // userProps: userSubProps.leadingArea,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {leadingChildren}
    </Container>
  );
};

export const renderTrailingArea = (props: AppBarProps): React.ReactNode => {
  const { children } = props;
  if (!children) return children;

  if (Array.isArray(children) && children.length > 2) {
    const Container = props.theme.trailingArea.component;

    const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
      componentProps: props,
      theme: props.theme.trailingArea,
      // userProps: userSubProps.trailingArea,
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

  const updatedProps = {
    ...props,
    children,
  };

  const Container = props.theme.container.component;

  const containerProps = getSubProps<AppBarProps, ViewProps, ViewStyle>({
    componentProps: props,
    theme: props.theme.container,
    // userProps: userSubProps.container,
  });

  return (
    <Container componentProps={props} {...containerProps}>
      {renderLeadingArea(updatedProps)}
      {renderCenterArea(updatedProps)}
      {renderTrailingArea(updatedProps)}
    </Container>
  );
});
