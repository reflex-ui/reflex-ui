import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { SubProps } from '../SubProps';

export const DefaultTextSubcomponent: React.ComponentType<
  // tslint:disable-next-line:no-any
  SubProps<any> & TextProps
> = ({ children, componentProps, ...otherProps }) => (
  <Text {...otherProps}>{children}</Text>
);
