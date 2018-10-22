import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { ReflexSubcomponent } from '../../ReflexSubcomponent';
import { ButtonProps } from '../ButtonProps';

export const DefaultButtonIconContainer: React.ComponentType<
  ReflexSubcomponent<ButtonProps> & ViewProps
> = ({ children, componentProps, ...otherProps }) => (
  <View {...otherProps}>{children}</View>
);
