import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { SubProps } from '../SubProps';

export const DefaultViewSubcomponent: React.ComponentType<
  // tslint:disable-next-line:no-any
  SubProps<any> & ViewProps
> = ({
  children,
  componentProps,
  /*
   * This is used to pass lib provided props, users'custom props,
   * as well as to deal with a TouchableWithoutFeedback's issue:
   * https://github.com/facebook/react-native/issues/1352
   * It's still an issue. Ref:
   * https://github.com/facebook/react-native/issues/10180
   */
  ...otherProps
  /**/
}) => <View {...otherProps}>{children}</View>;
