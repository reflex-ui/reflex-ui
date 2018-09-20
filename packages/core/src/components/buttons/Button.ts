import * as React from 'react';

import { withInteractivityState } from '../../interactivity';
import { OptionalButtonProps, SimpleButton } from './SimpleButton';
import { withOptionalButtonProps } from './withOptionalButtonProps';

const Button: React.ComponentType<OptionalButtonProps> = withInteractivityState(
  withOptionalButtonProps(SimpleButton),
);

export { Button };
