/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';

import { InteractionStateContext } from '../../interaction';
import { useInteraction } from '../../interaction/useInteraction';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { getPropsAndStyleFromTheme } from '../getPropsAndStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import {
  TouchableSurfaceProps,
  TouchableSurfacePropsOptional,
} from './TouchableSurfaceProps';
// tslint:disable-next-line
import { useDefaultTouchableSurfaceProps } from './useDefaultTouchableSurfaceProps';

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

export const renderTouchableSurfaceContainer = (
  props: TouchableSurfaceProps,
) => {
  const { children, theme } = props;
  const Container = (theme.container && theme.container.component) || View;
  const viewProps = getPropsAndStyleFromTheme(props, theme.container);

  if (Container === View) {
    return <Container {...viewProps}>{children}</Container>;
  }

  return (
    <Container complexComponentProps={props} {...viewProps}>
      {children}
    </Container>
  );
};

export const renderTouchableSurfaceTouchable = (
  props: TouchableSurfaceProps,
) => {
  const { theme } = props;

  const Touchable =
    (theme.touchable && theme.touchable.component) || TouchableWithoutFeedback;

  const touchablePropsFromTheme = getPropsAndStyleFromTheme(
    props,
    theme.touchable,
  );
  const touchableProps = extractTouchablePropsFromTouchableSurface(props);
  const mergedTouchableProps = merge(
    {},
    touchablePropsFromTheme,
    touchableProps,
  );

  const containerElement = renderTouchableSurfaceContainer(props);

  if (Touchable === TouchableWithoutFeedback) {
    return <Touchable {...mergedTouchableProps}>{containerElement}</Touchable>;
  }

  return (
    <Touchable complexComponentProps={props} {...mergedTouchableProps}>
      {containerElement}
    </Touchable>
  );
};

let TouchableSurface: React.ComponentType<TouchableSurfacePropsOptional> = (
  props: TouchableSurfacePropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultTouchableSurfaceProps(props);
  newProps = { ...newProps, ...useInteraction(newProps) };
  newProps = { ...newProps, ...useOnLayout(newProps) };
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);

  return (
    <ColorThemeContext.Provider value={newProps.colorTheme}>
      <InteractionStateContext.Provider value={newProps.interactionState}>
        {renderTouchableSurfaceTouchable(newProps)}
      </InteractionStateContext.Provider>
    </ColorThemeContext.Provider>
  );
};

TouchableSurface = processComponent<TouchableSurfacePropsOptional>(
  TouchableSurface,
  {
    name: 'TouchableSurface',
  },
);

export { TouchableSurface };
