/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { SimpleSuperIcon } from './SimpleSuperIcon';
import { OptionalSuperIconProps } from './SuperIconProps';
import { withDefaultSuperIconProps } from './withDefaultSuperIconProps';

const SuperIcon: React.ComponentType<
  OptionalSuperIconProps
> = withDefaultSuperIconProps(SimpleSuperIcon);

export { SuperIcon };
