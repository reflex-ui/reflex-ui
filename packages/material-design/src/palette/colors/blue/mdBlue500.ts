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
// tslint:disable-next-line:max-line-length
import { disabledGrey400_500_600 } from '../disabled/uncontained/disabledGrey400_500_600';
import { disabledGrey500 } from '../disabled/uncontained/disabledGrey500';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { blue500 } from './blue500';

export const mdBlue500: MaterialPaletteColorItem = {
  color: {
    inverted: {
      contained: createPaletteColorInteraction({
        color: invertPaletteColor(blue500),
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        color: createPaletteColorUsingOnColorOnly(blue500),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey400_500_600,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        color: blue500,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        color: createPaletteColorUsingColorOnly(blue500),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey500,
      }),
    },
  },
  name: 'Blue',
  tone: '500',
};
