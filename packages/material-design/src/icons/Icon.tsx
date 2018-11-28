import { OptionalSuperIconProps, SuperIcon } from '@reflex-ui/core';
import * as React from 'react';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

const Icon = (props: OptionalSuperIconProps & { name: string }) => {
  const { name, ...otherProps } = props;
  return (
    <SuperIcon {...otherProps}>
      <MaterialIcons name={name} />
    </SuperIcon>
  );
};

export { Icon };
