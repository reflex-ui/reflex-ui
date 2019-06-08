/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { SurfaceTheme } from '../surface/SurfaceTheme';
import { TextTheme } from '../text/TextTheme';
import { AvatarProps, AvatarPropsOptional } from './AvatarProps';

export interface AvatarTheme
  extends ComponentTheme<AvatarProps, AvatarPropsOptional> {
  readonly surface?: ComponentThemeGetter<AvatarProps, SurfaceTheme>;
  readonly text?: TextTheme<AvatarProps>;
}
