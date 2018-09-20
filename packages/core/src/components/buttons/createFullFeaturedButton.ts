import * as React from 'react';

import { createWithInteractivityState } from '../../interactivity';
import { OptionalButtonProps, SimpleButton } from './SimpleButton';
import { withOptionalButtonProps } from './withOptionalButtonProps';

export const createFullFeaturedButton = (): React.ComponentType<
  OptionalButtonProps
> => createWithInteractivityState(withOptionalButtonProps(SimpleButton));
