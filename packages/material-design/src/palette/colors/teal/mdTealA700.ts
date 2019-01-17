/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteColorInteraction,
  createPaletteColorUsingColorOnly,
  createPaletteColorUsingOnColorOnly,
  invertPaletteColor,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
import { createContainedPaletteColorVariant } from '../../createContainedPaletteColorVariant';
// tslint:disable-next-line:max-line-length
import { createUncontainedPaletteColorVariant } from '../../createUncontainedPaletteColorVariant';
import { disabledGrey300_500 } from '../disabled/contained/disabledGrey300_500';
import { disabledGrey500 } from '../disabled/uncontained/disabledGrey500';
// tslint:disable-next-line:max-line-length
import { disabledGrey600_400_600 } from '../disabled/uncontained/disabledGrey600_400_600';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { tealA700 } from './tealA700';

export const mdTealA700: MaterialPaletteColorItem = {
  color: {
    inverted: {
      contained: createPaletteColorInteraction({
        color: invertPaletteColor(tealA700),
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        color: createPaletteColorUsingOnColorOnly(tealA700),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey600_400_600,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        color: tealA700,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        color: createPaletteColorUsingColorOnly(tealA700),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey500,
      }),
    },
  },
  name: 'Teal',
  tone: '700',
};
