import {
  ButtonProps,
  getThemedColor,
  InteractivityType,
} from '@reflex-ui/core';
import { StyleSheet } from 'react-native';
import { getInlayColorByInteractivity } from '../../palette';

export const getContainedButtonRippleColor = (props: ButtonProps): string => {
  const interactivityState = {
    ...props.interactivityState,
    type: InteractivityType.ENABLED,
  };
  const viewProps = props.getContainerProps
    ? props.getContainerProps({ ...props, interactivityState })
    : {};
  let color = viewProps.style
    ? StyleSheet.flatten(viewProps.style).backgroundColor
    : undefined;

  if (!color) {
    color = getThemedColor({
      colorTheme: props.colorTheme,
      palette: props.theme.palette,
    });
  }

  return getInlayColorByInteractivity({
    color,
    type: props.interactivityState.type,
  });
};
