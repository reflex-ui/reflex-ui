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

import { resolveChildProps } from '../children';
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
    getChildrenProps,
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

  const userChildrenProps = props.getChildrenProps
    ? props.getChildrenProps(props)
    : {};
  const touchableProps = extractTouchableProps(props);

  const updatedProps = {
    ...props,
    children,
  };

  const Container = updatedProps.theme.container.component || DefaultViewChild;
  const Touchable = props.theme.touchable.component || DefaultTouchableChild;

  const containerProps = resolveChildProps<
    TouchableSurfaceProps,
    ViewProps,
    ViewStyle
    // tslint:disable-next-line:ter-func-call-spacing
  >({
    componentProps: updatedProps,
    theme: updatedProps.theme.container,
    userProps: userChildrenProps.container,
  });

  return (
    <Touchable componentProps={props} {...touchableProps}>
      <Container
        componentProps={updatedProps}
        onLayout={updatedProps.onLayout}
        {...containerProps}
      >
        {children}
      </Container>
    </Touchable>
  );
});
