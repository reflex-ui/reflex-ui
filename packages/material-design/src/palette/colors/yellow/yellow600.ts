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

export const yellow600dark = '#c6a700';
export const yellow600light = '#ffff6b';
export const yellow600normal = '#fdd835';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: yellow600dark,
    onColor: blackNormal,
  },
  light: {
    color: yellow600light,
    onColor: blackNormal,
  },
  normal: {
    color: yellow600normal,
    onColor: blackNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: yellow600dark,
    onColor: yellow600dark,
  },
  light: {
    color: yellow600light,
    onColor: yellow600light,
  },
  normal: {
    color: yellow600normal,
    onColor: yellow600normal,
  },
};

export const yellow600: MaterialPaletteColorItem = {
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
  name: 'Yellow',
  tone: '600',
};
