import { IconWrapper } from '@reflex-ui/core';
import * as React from 'react';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { OptionalIconProps } from './OptionalIconProps';

const Icon = (props: OptionalIconProps) => (
  <IconWrapper {...props}>
    <MaterialIcons />
  </IconWrapper>
);

export { Icon };
