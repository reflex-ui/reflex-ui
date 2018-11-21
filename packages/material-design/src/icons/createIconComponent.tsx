import { OptionalTextIconWrapperProps } from '@reflex-ui/core';
import * as React from 'react';

import { Icon } from './Icon';

export const createIconComponent = (name: string) => (
  props: OptionalTextIconWrapperProps,
) => <Icon name={name} {...props} />;
