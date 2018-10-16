import * as React from 'react';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { IconProps } from 'react-native-vector-icons/Icon';

const Icon = (props: IconProps) => (
  <MaterialIcons size={32} color="#C0C0C0" {...props} />
);

export { Icon };
