/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityType } from '../interactivity/InteractivityType';
import { ColorTheme } from './ColorTheme';
import { PaletteTheme } from './PaletteTheme';

export type ThemedColorGetter = (
  props: {
    readonly colorTheme?: ColorTheme;
    readonly interactivityType?: InteractivityType;
    readonly onColor?: boolean;
    readonly paletteTheme: PaletteTheme;
  },
) => string;
