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
  const textProps = props.getTextProps
    ? props.getTextProps({ ...props, interactivityState })
    : {};
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
