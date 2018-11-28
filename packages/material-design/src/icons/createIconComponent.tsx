import { OptionalSuperIconProps } from '@reflex-ui/core';
import * as React from 'react';

import { Icon } from './Icon';
import { IconName } from './IconName';

export const createIconComponent = (name: IconName) => (
  props: OptionalSuperIconProps,
) => <Icon name={name} {...props} />;
