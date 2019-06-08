/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ImageTheme } from './ImageTheme';
import { RfxImageProps } from './RfxImageProps';

export interface RfxImageTheme {
  readonly image?: ImageTheme<RfxImageProps>;
}
