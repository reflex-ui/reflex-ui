/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../../sizing/Size';
import { RfxSizedTextTheme } from './RfxSizedTextTheme';
import { RfxTextPropsBase } from './RfxTextProps';

export interface RfxSizedTextPropsBase<Props, Theme>
  extends RfxTextPropsBase<Props, Theme> {
  size: Size;
}

export type RfxSizedTextPropsBaseOptional<Props, Theme> = Partial<
  RfxSizedTextPropsBase<Props, Theme>
>;

export interface RfxSizedTextProps
  extends RfxSizedTextPropsBase<RfxSizedTextProps, RfxSizedTextTheme> {}

export type RfxSizedTextPropsOptional = Partial<RfxSizedTextProps>;
