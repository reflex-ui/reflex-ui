import {
  ButtonProps,
  getThemedColor,
  InteractivityType,
} from '@reflex-ui/core';
import { StyleSheet } from 'react-native';
import { getOverlayColorByInteractivity } from '../../palette';

export const getDefaultButtonRippleColor = (props: ButtonProps): string => {
  const interactivityState = {
    ...props.interactivityState,
    type: InteractivityType.ENABLED,
  };
  const textProps = props.getSubProps
    ? props.getSubProps({ ...props, interactivityState }).text || {}
    : {};
  let color = textProps.style
    ? StyleSheet.flatten(textProps.style).color
    : undefined;

  if (!color) {
    color = getThemedColor({
      colorTheme: props.colorTheme,
      paletteTheme: props.paletteTheme,
    });
  }

  return getOverlayColorByInteractivity({
    color,
    type: props.interactivityState.type,
  });
};
