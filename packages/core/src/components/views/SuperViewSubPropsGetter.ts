/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SuperViewProps } from './SuperViewProps';
import { SuperViewSubProps } from './SuperViewSubProps';

export type SuperViewSubPropsGetter = (
  props: SuperViewProps,
) => SuperViewSubProps;
