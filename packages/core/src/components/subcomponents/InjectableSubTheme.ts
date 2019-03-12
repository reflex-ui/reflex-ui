/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { SubProps } from './SubProps';
import { SubTheme } from './SubTheme';

export interface InjectableSubTheme<ComponentProps, OutputProps, OutputStyle>
  extends SubTheme<ComponentProps, OutputProps, OutputStyle> {
  readonly component?: React.ComponentType<
    SubProps<ComponentProps> & OutputProps
  >;
}
