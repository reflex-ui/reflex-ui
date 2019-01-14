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

export const tealA700dark = '#008e76';
export const tealA700light = '#5df2d6';
export const tealA700normal = '#00bfa5';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: tealA700dark,
    onColor: blackNormal,
  },
  light: {
    color: tealA700light,
    onColor: blackNormal,
  },
  normal: {
    color: tealA700normal,
    onColor: blackNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: tealA700dark,
    onColor: tealA700dark,
  },
  light: {
    color: tealA700light,
    onColor: tealA700light,
  },
  normal: {
    color: tealA700normal,
    onColor: tealA700normal,
  },
};

export const tealA700: MaterialPaletteColorItem = {
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
  name: 'Teal',
  tone: '700',
};
