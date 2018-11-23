import * as React from 'react';

import { withInteractivityState } from '../../interactivity';
import { OptionalButtonProps } from './ButtonProps';
import { SimpleButton } from './SimpleButton';
import { withDefaultButtonProps } from './withDefaultButtonProps';

const Button: React.ComponentType<OptionalButtonProps> = withInteractivityState(
  withDefaultButtonProps(SimpleButton),
);

export { Button };
