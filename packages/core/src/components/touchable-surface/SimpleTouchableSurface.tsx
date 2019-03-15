/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactIs from 'react-is';
import {
  TouchableWithoutFeedbackProps,
  ViewProps,
  ViewStyle,
} from 'react-native';

import { resolveChildProps } from '../children/resolveChildProps';
import { reflexComponent } from '../reflexComponent';
import { DefaultTouchableChild } from '../touchable/DefaultTouchableChild';
import { DefaultViewChild } from '../view/DefaultViewChild';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';

export const extractTouchableProps = (
  props: TouchableSurfaceProps,
): TouchableWithoutFeedbackProps => {
  const {
    children,
    colorTheme,
    getPatchTheme,
    interactionState,
    paletteTheme,
    theme,
    ...touchableProps
  } = props;

  return touchableProps;
};

export const SimpleTouchableSurface = reflexComponent<TouchableSurfaceProps>({
  name: 'SimpleTouchableSurface',
})((props: TouchableSurfaceProps) => {
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

  const containerProps = resolveChildProps<
    TouchableSurfaceProps,
    ViewProps,
    ViewStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: newProps,
    patchTheme: patchTheme && patchTheme.container,
    theme: newProps.theme.container,
  });

  const touchableProps = extractTouchableProps(props);

  const Touchable =
    (patchTheme && patchTheme.touchable && patchTheme.touchable.component) ||
    (newProps.theme.touchable && newProps.theme.touchable.component) ||
    DefaultTouchableChild;

  return (
    <Touchable componentProps={props} {...touchableProps}>
      <Container
        componentProps={newProps}
        onLayout={newProps.onLayout}
        {...containerProps}
      >
        {children}
      </Container>
    </Touchable>
  );
});
