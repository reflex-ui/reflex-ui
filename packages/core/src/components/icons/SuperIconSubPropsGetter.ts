/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SubPropsGetter } from '../subcomponents/SubPropsGetter';
import { SuperIconProps } from './SuperIconProps';
import { SuperIconSubProps } from './SuperIconSubProps';

export type SuperIconSubPropsGetter = SubPropsGetter<
  SuperIconProps,
  SuperIconSubProps
>;
