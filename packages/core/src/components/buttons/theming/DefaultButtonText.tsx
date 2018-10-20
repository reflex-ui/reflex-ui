import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { ReflexSubcomponent } from '../../ReflexSubcomponent';
import { ButtonProps } from '../ButtonProps';

export const DefaultButtonText: React.ComponentType<
  ReflexSubcomponent<ButtonProps> & TextProps
> = ({ children, componentProps, ...otherProps }) => (
  <Text {...otherProps}>{children}</Text>
);
