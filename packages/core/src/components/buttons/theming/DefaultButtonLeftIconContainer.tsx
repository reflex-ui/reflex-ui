import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { SpecialButtonProps } from '../SpecialButtonProps';

export const DefaultButtonLeftIconContainer: React.ComponentType<
  SpecialButtonProps & ViewProps
> = ({
  children,
  colorTheme,
  fullWidth,
  interactivityState,
  leftIcon,
  rightIcon,
  size,
  theme,
  variant,
  ...otherProps
}) => <View {...otherProps}>{children}</View>;
