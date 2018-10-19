import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { SpecialButtonProps } from '../SpecialButtonProps';

export const DefaultButtonText: React.ComponentType<
  SpecialButtonProps & TextProps
> = props => <Text style={props.style}>{props.children}</Text>;
