import * as React from 'react';
import { Icon } from './Icon';
import { OptionalIconProps } from './OptionalIconProps';

export const createIconComponent = (name: string) =>
  // @ts-ignore
  // Flavio Silva on Oct 16th, 2018:
  // error: types of property 'style' are incompatible.
  // It seems some kind of silly issue,
  // maybe due to different versions of @types/react-native/index.d.ts.
  // Let's just ignore it for now.
  (props: OptionalIconProps) => <Icon name={name} {...props} />;
