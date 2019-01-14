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

export const red900dark = '#7f0000';
export const red900light = '#f05545';
export const red900normal = '#b71c1c';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: red900dark,
    onColor: whiteNormal,
  },
  light: {
    color: red900light,
    onColor: blackNormal,
  },
  normal: {
    color: red900normal,
    onColor: blackNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: red900dark,
    onColor: red900dark,
  },
  light: {
    color: red900light,
    onColor: red900light,
  },
  normal: {
    color: red900normal,
    onColor: red900normal,
  },
};

export const red900: MaterialPaletteColorItem = {
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
  name: 'Red',
  tone: '900',
};
