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
import { disabledPaletteColor } from '../disabledPaletteColor';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { whiteNormal } from '../white/white';

export const blackNormal = '#000';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: blackNormal,
    onColor: whiteNormal,
  },
  light: {
    color: blackNormal,
    onColor: whiteNormal,
  },
  normal: {
    color: blackNormal,
    onColor: whiteNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: blackNormal,
    onColor: blackNormal,
  },
  light: {
    color: blackNormal,
    onColor: blackNormal,
  },
  normal: {
    color: blackNormal,
    onColor: blackNormal,
  },
};

export const black: MaterialPaletteColorItem = {
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
  name: 'Black',
};
