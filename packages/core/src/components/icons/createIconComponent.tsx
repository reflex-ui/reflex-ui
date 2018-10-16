import * as React from 'react';
import { Icon } from './Icon';
import { OptionalIconProps } from './OptionalIconProps';

export const createIconComponent = (name: string) =>
  // @ts-ignore
  // error: types of property 'style' are incompatible.
  // It seems some kind of silly issue,
  // maybe due to different versions of @types/react-native/index.d.ts.
  // Let's just ignore for now.
  (props: OptionalIconProps) => <Icon name={name} {...props} />;
