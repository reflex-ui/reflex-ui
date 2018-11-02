import {
  ButtonProps,
  DefaultButtonContainer,
  getThemedColor,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { StyleSheet } from 'react-native';

import { getOverlayColorByInteractivity } from '../../palette';
import { withRippleEffect } from '../withRippleEffect';
// prettier-ignore
import {
  getHoveredDefaultButtonContainerProps,
} from './DefaultButtonContainerProps';
import { defaultStaticButtonTheme } from './defaultStaticButtonTheme';

export const getDefaultButtonRippleColor = (props: ButtonProps): string => {
  const textProps = props.getTextProps ? props.getTextProps(props) : {};
  let color = textProps.style
    ? StyleSheet.flatten(textProps.style).color
    : undefined;

  if (!color) {
    color = getThemedColor({
      colorTheme: props.colorTheme,
      palette: props.theme.palette,
    });
  }

  return getOverlayColorByInteractivity({
    color,
    type: props.interactivityState.type,
  });
};

export const partialDefaultButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    pressed: {
      container: {
        getProps: getHoveredDefaultButtonContainerProps,
      },
    },
  },
  subComponents: {
    Container: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultButtonContainer),
  },
};

export const defaultButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, defaultStaticButtonTheme, partialDefaultButtonTheme);
