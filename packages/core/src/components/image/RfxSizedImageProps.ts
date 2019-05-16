/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from '../../sizing/Size';
import { RfxImagePropsBase, RfxImagePropsBaseOptional } from './RfxImageProps';
import { RfxSizedImageTheme } from './RfxSizedImageTheme';

export interface RfxSizedImagePropsBase<Props, Theme>
  extends RfxImagePropsBase<Props, Theme> {
  height?: number;
  size: Size;
  width?: number;
}

export interface RfxSizedImagePropsBaseOptional<Props, Theme>
  extends RfxImagePropsBaseOptional<Props, Theme> {
  height?: number;
  size?: Size;
  width?: number;
}

export interface RfxSizedImageProps
  extends RfxSizedImagePropsBase<RfxSizedImageProps, RfxSizedImageTheme> {}

export interface RfxSizedImagePropsOptional
  extends RfxSizedImagePropsBaseOptional<
    RfxSizedImageProps,
    RfxSizedImageTheme
  > {}
