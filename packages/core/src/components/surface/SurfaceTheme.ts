/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentTheme } from '../ComponentTheme';
import { ViewTheme } from '../view/ViewTheme';
import { SurfaceProps, SurfacePropsOptional } from './SurfaceProps';

export interface SurfaceTheme
  extends ComponentTheme<SurfaceProps, SurfacePropsOptional> {
  readonly view?: ViewTheme<SurfaceProps>;
}
