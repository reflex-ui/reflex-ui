/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaletteThemeProps } from '../../palette';
import { SizeProps } from '../../sizing/SizeProps';
import { MarginProps } from '../../spacing';
import { SuperIconSubPropsGetter } from './SuperIconSubPropsGetter';
import { SuperIconTheme } from './SuperIconTheme';

export interface SuperIconProps
  extends MarginProps,
    PaletteThemeProps,
    SizeProps {
  readonly children?: React.ReactNode;
  readonly color?: string;
  readonly getSubProps?: SuperIconSubPropsGetter;
  readonly invertColor?: boolean;
  readonly skipContainer?: boolean;
  readonly theme: SuperIconTheme;
}

export type OptionalSuperIconProps = Partial<SuperIconProps>;
