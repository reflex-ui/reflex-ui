import { IconWrapper, OptionalTextIconWrapperProps } from '@reflex-ui/core';
import * as React from 'react';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Icon = (props: OptionalTextIconWrapperProps) => (
  <IconWrapper {...props}>
    <MaterialIcons name={props.name} />
  </IconWrapper>
);

export { Icon };
