/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  PropsWithChildren,
  ReactElement,
  Ref,
  useMemo,
} from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { InteractionStateProvider, useInteraction } from '../../interaction';
import { cloneElement } from '../../utils/cloneElement';
import { useComponentsTheme } from '../ComponentsTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderTouchableComponent } from './renderTouchableComponent';
import { TouchableProps, TouchablePropsOptional } from './TouchableProps';
import { TouchableTheme } from './TouchableTheme';
import { useDefaultTouchableProps } from './useDefaultTouchableProps';

const useTheme = (theme?: TouchableTheme): TouchableTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.touchable === undefined ||
    componentsTheme.touchable === null
  ) {
    throw new MissingComponentThemeError('<Touchable>');
  }

  return componentsTheme.touchable;
};

let Touchable: React.ComponentType<TouchablePropsOptional> = forwardRef(
  (props: TouchablePropsOptional, ref: Ref<TouchableWithoutFeedback>) => {
    const theme = useTheme(props.theme);

    let newProps: PropsWithChildren<TouchableProps> = useDefaultTouchableProps(
      props,
      theme,
    );
    newProps = { ...newProps, ...useInteraction(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    const newChildren = useMemo(() => {
      if (
        newProps.children == undefined ||
        newProps.children === null ||
        typeof newProps.children === 'string' ||
        typeof newProps.children === 'number' ||
        typeof newProps.children === 'boolean' ||
        typeof newProps.children === 'function'
      ) {
        return newProps.children;
      }

      return cloneElement({
        element: newProps.children as ReactElement,
        props: {
          isTouchableHandler: true,
          pointerHovers: newProps.pointerHovers,
        },
      });
    }, [newProps.children, newProps.pointerHovers]);

    if (newChildren !== newProps.children) {
      newProps = { ...newProps, children: newChildren };
    }

    const Component =
      newProps.theme &&
      newProps.theme.getComponent &&
      newProps.theme.getComponent(newProps);

    return (
      <InteractionStateProvider value={newProps.interactionState}>
        {renderTouchableComponent(newProps, Component, ref)}
      </InteractionStateProvider>
    );
  },
);

Touchable = processComponent<TouchablePropsOptional>(Touchable, {
  name: 'Touchable',
});

export { Touchable };
