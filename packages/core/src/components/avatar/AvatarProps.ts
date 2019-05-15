/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SurfacePropsBase } from '../surface/SurfaceProps';
import { AvatarTheme } from './AvatarTheme';

export interface AvatarPropsBase<Props, Theme>
  extends SurfacePropsBase<Props, Theme> {}

export type AvatarPropsBaseOptional<Props, Theme> = Partial<
  AvatarPropsBase<Props, Theme>
>;

export interface AvatarProps
  extends AvatarPropsBase<AvatarProps, AvatarTheme> {}

export type AvatarPropsOptional = Partial<AvatarProps>;
