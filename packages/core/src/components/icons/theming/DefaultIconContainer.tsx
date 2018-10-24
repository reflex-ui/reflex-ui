import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { ReflexSubcomponent } from '../../ReflexSubcomponent';
import { IconWrapperProps } from '../IconWrapperProps';

export const DefaultIconContainer: React.ComponentType<
  ReflexSubcomponent<IconWrapperProps> & ViewProps
> = ({ children, componentProps, ...otherProps }) => (
  <View {...otherProps}>{children}</View>
);
