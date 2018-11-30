import * as React from 'react';
import { Text, TextProps } from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { SubProps } from '../subcomponents/SubProps';

export const DefaultTextSubcomponent = reflexComponent<
  // tslint:disable-next-line:no-any
  SubProps<any> & TextProps
>({ name: 'DefaultTextSubcomponent' })(
  ({ children, componentProps, ...otherProps }) => (
    <Text {...otherProps}>{children}</Text>
  ),
);
