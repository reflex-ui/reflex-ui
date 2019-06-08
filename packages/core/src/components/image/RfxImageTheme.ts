/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { ImageTheme } from './ImageTheme';
import { RfxImageProps, RfxImagePropsOptional } from './RfxImageProps';

export interface RfxImageTheme
  extends ComponentTheme<RfxImageProps, RfxImagePropsOptional> {
  readonly image?: ImageTheme<RfxImageProps>;
}
