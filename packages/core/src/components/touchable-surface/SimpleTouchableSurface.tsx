/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import * as ReactIs from 'react-is';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { extractPropsFromTheme } from '../extractPropsFromTheme';
import { mergeThemes } from '../mergeThemes';
import { reflexComponent } from '../reflexComponent';
import { DefaultTouchable } from '../touchable/DefaultTouchable';
import { DefaultView } from '../view/DefaultView';
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

  const Touchable =
    (mergedTheme.touchable && mergedTheme.touchable.component) ||
    DefaultTouchable;

  const touchablePropsFromTheme = extractPropsFromTheme(
    newProps,
    mergedTheme.touchable,
  );
  const touchableProps = extractTouchableProps(props);

  if (touchableProps.style) {
    throw new Error(
      [
        "Rfx: It's not possible to pass style prop directly.",
        'You have to pass it as part of theme object.',
      ].join(' '),
    );
  }
  const mergedTouchableProps = merge(
    {},
    touchablePropsFromTheme,
    touchableProps,
  );

  return (
    <Touchable complexComponentProps={props} {...mergedTouchableProps}>
      <Container
        complexComponentProps={newProps}
        onLayout={newProps.onLayout}
        {...containerProps}
      >
        {children}
      </Container>
    </Touchable>
  );
});
