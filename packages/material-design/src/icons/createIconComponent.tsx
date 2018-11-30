import {
  OptionalSuperIconProps,
  reflexComponent,
  transformText,
} from '@reflex-ui/core';
import * as React from 'react';

import { Icon } from './Icon';
import { IconName } from './IconName';

export const createIconComponent = (name: IconName) =>
  reflexComponent<OptionalSuperIconProps>({
    name: `Md${transformText({
      text: name,
      transformation: 'capitalize',
    })}Icon`,
  })((props: OptionalSuperIconProps) => <Icon name={name} {...props} />);
