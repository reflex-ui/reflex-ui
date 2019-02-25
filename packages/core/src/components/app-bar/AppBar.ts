/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

// tslint:disable-next-line:max-line-length
import { withResponsivenessProps } from '../../responsiveness/withResponsivenessProps';
import { AppBarPropsOptional } from './AppBarProps';
import { SimpleAppBar } from './SimpleAppBar';
import { withDefaultAppBarProps } from './withDefaultAppBarProps';

export const AppBar: React.ComponentType<
  AppBarPropsOptional
> = withResponsivenessProps(withDefaultAppBarProps(SimpleAppBar));
