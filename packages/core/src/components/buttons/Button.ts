import * as React from 'react';

import { withInteractivityState } from '../../interactivity';
import { OptionalButtonProps } from './ButtonProps';
import { SimpleButton } from './SimpleButton';
import { withOptionalButtonProps } from './withOptionalButtonProps';

const Button: React.ComponentType<OptionalButtonProps> = withInteractivityState(
  withOptionalButtonProps(SimpleButton),
);

export { Button };
