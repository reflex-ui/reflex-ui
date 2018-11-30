/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MarginProps } from '../../margin';
import { PaletteThemeProps } from '../../palette';
import { SizeProps } from '../../SizeProps';
import { SuperIconSubPropsGetter } from './SuperIconSubPropsGetter';
import { SuperIconTheme } from './SuperIconTheme';

export interface SuperIconProps
  extends MarginProps,
    PaletteThemeProps,
    SizeProps {
  readonly children?: React.ReactNode;
  readonly color?: string;
  readonly getSubProps?: SuperIconSubPropsGetter;
  readonly skipContainer?: boolean;
  readonly theme: SuperIconTheme;
}

export type OptionalSuperIconProps = Partial<SuperIconProps>;
