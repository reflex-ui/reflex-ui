/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import {
  RfxSizedTextProps,
  RfxSizedTextPropsOptional,
} from './RfxSizedTextProps';
import { TextTheme } from './TextTheme';

export interface RfxSizedTextTheme
  extends ComponentTheme<RfxSizedTextProps, RfxSizedTextPropsOptional> {
  readonly text?: TextTheme<RfxSizedTextProps>;
}
