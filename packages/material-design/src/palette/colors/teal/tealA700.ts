/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteColorInteraction,
  fromOnColorOnlyPaletteColor,
  invertPaletteColor,
  PaletteColor,
} from '@reflex-ui/core';

// prettier-ignore
import {
  createContainedPaletteColorVariant,
} from '../../createContainedPaletteColorVariant';
// prettier-ignore
import {
  createUncontainedPaletteColorVariant,
} from '../../createUncontainedPaletteColorVariant';
import { black } from '../black/black';
import { disabledGrey300_500 } from '../disabled/contained/disabledGrey300_500';
import { disabledGrey500 } from '../disabled/uncontained/disabledGrey500';
// tslint:disable-next-line:max-line-length
import { disabledGrey600_400_600 } from '../disabled/uncontained/disabledGrey600_400_600';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';

export const tealA700 = '#00bfa5';
export const tealA700Dark = '#008e76';
export const tealA700Light = '#5df2d6';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: tealA700Dark,
    onColor: black,
  },
  light: {
    color: tealA700Light,
    onColor: black,
  },
  normal: {
    color: tealA700,
    onColor: black,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: tealA700Dark,
    onColor: tealA700Dark,
  },
  light: {
    color: tealA700Light,
    onColor: tealA700Light,
  },
  normal: {
    color: tealA700,
    onColor: tealA700,
  },
};

export const mdTealA700: MaterialPaletteColorItem = {
  color: {
    inverted: {
      contained: createPaletteColorInteraction({
        baseColor: invertPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: fromOnColorOnlyPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey600_400_600,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        baseColor: regularContainedBaseColor,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: regularUncontainedBaseColor,
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey500,
      }),
    },
  },
  name: 'Teal',
  tone: '700',
};
