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
import { blackNormal } from '../black/black';
import { disabledPaletteColor } from '../disabledPaletteColor';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { whiteNormal } from '../white/white';

export const green800dark = '#005005';
export const green800light = '#60ad5e';
export const green800normal = '#2e7d32';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: green800dark,
    onColor: whiteNormal,
  },
  light: {
    color: green800light,
    onColor: blackNormal,
  },
  normal: {
    color: green800normal,
    onColor: blackNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: green800dark,
    onColor: green800dark,
  },
  light: {
    color: green800light,
    onColor: green800light,
  },
  normal: {
    color: green800normal,
    onColor: green800normal,
  },
};

export const green800: MaterialPaletteColorItem = {
  color: {
    inverted: {
      contained: createPaletteColorInteraction({
        baseColor: invertPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledPaletteColor,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: fromOnColorOnlyPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledPaletteColor,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        baseColor: regularContainedBaseColor,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledPaletteColor,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: regularUncontainedBaseColor,
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledPaletteColor,
      }),
    },
  },
  name: 'Green',
  tone: '800',
};
