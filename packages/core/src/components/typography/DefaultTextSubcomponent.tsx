import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { ReflexSubcomponent } from '../ReflexSubcomponent';

export const DefaultTextSubcomponent: React.ComponentType<
  // tslint:disable-next-line:no-any
  ReflexSubcomponent<any> & TextProps
> = ({ children, componentProps, ...otherProps }) => (
  <Text {...otherProps}>{children}</Text>
);
