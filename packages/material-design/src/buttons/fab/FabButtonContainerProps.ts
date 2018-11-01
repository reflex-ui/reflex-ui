import { InteractivityType } from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';
import { getMidElevationStylesByInteractivity } from '../../elevation';

export const disabledFabButtonContainerStyle: ViewStyle = {
  ...getMidElevationStylesByInteractivity(InteractivityType.DISABLED),
};

export const disabledFabButtonContainerProps: ViewProps = {
  style: disabledFabButtonContainerStyle,
};

export const enabledFabButtonContainerStyle: ViewStyle = {
  ...getMidElevationStylesByInteractivity(InteractivityType.ENABLED),
};

export const enabledFabButtonContainerProps: ViewProps = {
  style: enabledFabButtonContainerStyle,
};

export const focusedFabButtonContainerStyle: ViewStyle = {
  ...getMidElevationStylesByInteractivity(InteractivityType.FOCUSED),
};

export const focusedFabButtonContainerProps: ViewProps = {
  style: focusedFabButtonContainerStyle,
};

export const hoveredFabButtonContainerStyle: ViewStyle = {
  ...getMidElevationStylesByInteractivity(InteractivityType.HOVERED),
};

export const hoveredFabButtonContainerProps: ViewProps = {
  style: focusedFabButtonContainerStyle,
};

export const pressedFabButtonContainerStyle: ViewStyle = {
  ...getMidElevationStylesByInteractivity(InteractivityType.PRESSED),
};

export const pressedFabButtonContainerProps: ViewProps = {
  style: pressedFabButtonContainerStyle,
};
