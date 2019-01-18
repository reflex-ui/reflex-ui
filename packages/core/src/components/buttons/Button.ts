/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { withInteractionState } from '../../interaction';
import { OptionalButtonProps } from './ButtonProps';
import { SimpleButton } from './SimpleButton';
import { withDefaultButtonProps } from './withDefaultButtonProps';

const Button: React.ComponentType<OptionalButtonProps> = withInteractionState(
  withDefaultButtonProps(SimpleButton),
);

export { Button };
