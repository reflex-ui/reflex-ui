import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { SpecialButtonProps } from '../SpecialButtonProps';

export const DefaultButtonContainer: React.ComponentType<
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
  /*
   * This is used to pass framework's own stuff as well as to
   * deal with a TouchableWithoutFeedback's issue:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
  ...otherProps
  /**/
}) => <View {...otherProps}>{children}</View>;
