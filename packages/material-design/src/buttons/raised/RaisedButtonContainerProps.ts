import { InteractivityType } from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';
import { getLowElevationStylesByInteractivity } from '../../elevation';

export const disabledRaisedButtonContainerStyle: ViewStyle = {
  ...getLowElevationStylesByInteractivity(InteractivityType.DISABLED),
};

export const disabledRaisedButtonContainerProps: ViewProps = {
  style: disabledRaisedButtonContainerStyle,
};

export const enabledRaisedButtonContainerStyle: ViewStyle = {
  ...getLowElevationStylesByInteractivity(InteractivityType.ENABLED),
};

export const enabledRaisedButtonContainerProps: ViewProps = {
  style: enabledRaisedButtonContainerStyle,
};

export const focusedRaisedButtonContainerStyle: ViewStyle = {
  ...getLowElevationStylesByInteractivity(InteractivityType.FOCUSED),
};

export const focusedRaisedButtonContainerProps: ViewProps = {
  style: focusedRaisedButtonContainerStyle,
};

export const hoveredRaisedButtonContainerStyle: ViewStyle = {
  ...getLowElevationStylesByInteractivity(InteractivityType.HOVERED),
};

export const hoveredRaisedButtonContainerProps: ViewProps = {
  style: focusedRaisedButtonContainerStyle,
};

export const pressedRaisedButtonContainerStyle: ViewStyle = {
  ...getLowElevationStylesByInteractivity(InteractivityType.PRESSED),
};

export const pressedRaisedButtonContainerProps: ViewProps = {
  style: pressedRaisedButtonContainerStyle,
};
