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

export const deepPurple500dark = '#320b86';
export const deepPurple500light = '#9a67ea';
export const deepPurple500normal = '#673ab7';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: deepPurple500dark,
    onColor: whiteNormal,
  },
  light: {
    color: deepPurple500light,
    onColor: blackNormal,
  },
  normal: {
    color: deepPurple500normal,
    onColor: whiteNormal,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: deepPurple500dark,
    onColor: deepPurple500dark,
  },
  light: {
    color: deepPurple500light,
    onColor: deepPurple500light,
  },
  normal: {
    color: deepPurple500normal,
    onColor: deepPurple500normal,
  },
};

export const deepPurple500: MaterialPaletteColorItem = {
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
  name: 'Deep Purple',
  tone: '500',
};
