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
// tslint:disable-next-line:max-line-length
import { disabledAllNormalPaletteColor } from '../disabledAllNormalPaletteColor';
// tslint:disable-next-line:max-line-length
import { disabledUncontainedAllNormalPaletteColor } from '../disabledUncontainedAllNormalPaletteColor';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { whiteNormal } from '../white/white';

export const blue500dark = '#0069c0';
export const blue500light = '#6ec6ff';
export const blue500normal = '#2196f3';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: blue500dark,
    onColor: whiteNormal,
  },
  light: {
    color: blue500light,
    onColor: blackNormal,
  },
  normal: {
    color: blue500normal,
    onColor: blackNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: blue500dark,
    onColor: blue500dark,
  },
  light: {
    color: blue500light,
    onColor: blue500light,
  },
  normal: {
    color: blue500normal,
    onColor: blue500normal,
  },
};

export const blue500: MaterialPaletteColorItem = {
  color: {
    inverted: {
      contained: createPaletteColorInteraction({
        baseColor: invertPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledAllNormalPaletteColor,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: fromOnColorOnlyPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledUncontainedAllNormalPaletteColor,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        baseColor: regularContainedBaseColor,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledAllNormalPaletteColor,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: regularUncontainedBaseColor,
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledUncontainedAllNormalPaletteColor,
      }),
    },
  },
  name: 'Blue',
  tone: '500',
};

console.log('blue500: ', blue500);
