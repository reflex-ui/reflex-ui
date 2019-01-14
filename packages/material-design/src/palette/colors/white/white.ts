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

export const whiteNormal = '#fff';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: whiteNormal,
    onColor: blackNormal,
  },
  light: {
    color: whiteNormal,
    onColor: blackNormal,
  },
  normal: {
    color: whiteNormal,
    onColor: blackNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: whiteNormal,
    onColor: whiteNormal,
  },
  light: {
    color: whiteNormal,
    onColor: whiteNormal,
  },
  normal: {
    color: whiteNormal,
    onColor: whiteNormal,
  },
};

export const white: MaterialPaletteColorItem = {
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
  name: 'White',
};
