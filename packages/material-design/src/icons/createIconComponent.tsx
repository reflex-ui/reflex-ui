import * as React from 'react';
import { Icon } from './Icon';
import { OptionalIconProps } from './OptionalIconProps';

export const createIconComponent = (name: string) => (
  props: OptionalIconProps,
) => <Icon name={name} {...props} />;
