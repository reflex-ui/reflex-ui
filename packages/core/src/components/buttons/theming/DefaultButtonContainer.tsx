import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { ReflexSubcomponent } from '../../ReflexSubcomponent';
import { ButtonProps } from '../ButtonProps';

export const DefaultButtonContainer: React.ComponentType<
  ReflexSubcomponent<ButtonProps> & ViewProps
> = ({
  children,
  componentProps,
  /*
   * This is used to pass framework's own stuff, users'custom stuff,
   * as well as to deal with a TouchableWithoutFeedback's issue:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
  ...otherProps
  /**/
}) => <View {...otherProps}>{children}</View>;
