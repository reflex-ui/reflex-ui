/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { withInteractionState } from '../../interaction';
import { ButtonPropsOptional } from './ButtonProps';
import { SimpleButton } from './SimpleButton';

const Button: React.ComponentType<ButtonPropsOptional> = withInteractionState(
  SimpleButton,
);

export { Button };
