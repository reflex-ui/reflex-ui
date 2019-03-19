/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import { TouchableWithoutFeedbackProps } from 'react-native';

import { propsPipe } from '../../utils/propsPipe';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { reflexComponent } from '../reflexComponent';
import { DefaultTouchable } from '../touchable/DefaultTouchable';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { DefaultView } from '../view/DefaultView';
import { TouchableSurfaceProps } from './TouchableSurfaceProps';

export const extractTouchablePropsFromTouchableSurface = (
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
  validateNoStyleProps(props);
  const newProps = propsPipe<TouchableSurfaceProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { theme } = newProps;

  const Touchable =
    (theme.touchable && theme.touchable.component) || DefaultTouchable;

  const touchablePropsFromTheme = getPropsAndStyleFromTheme(
    newProps,
    theme.touchable,
  );
  const touchableProps = extractTouchablePropsFromTouchableSurface(newProps);
  const mergedTouchableProps = merge(
    {},
    touchablePropsFromTheme,
    touchableProps,
  );

  const Container =
    (theme.container && theme.container.component) || DefaultView;
  const containerProps = getPropsAndStyleFromTheme(newProps, theme.container);

  return (
    <Touchable complexComponentProps={newProps} {...mergedTouchableProps}>
      <Container
        complexComponentProps={newProps}
        onLayout={newProps.onLayout}
        {...containerProps}
      >
        {newProps.children}
      </Container>
    </Touchable>
  );
});
