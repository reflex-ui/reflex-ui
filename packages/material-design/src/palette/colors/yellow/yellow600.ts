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
import { disabledGrey600 } from '../disabled/uncontained/disabledGrey600';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';

export const yellow600 = '#fdd835';
export const yellow600Dark = '#c6a700';
export const yellow600Light = '#ffff6b';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: yellow600Dark,
    onColor: black,
  },
  light: {
    color: yellow600Light,
    onColor: black,
  },
  normal: {
    color: yellow600,
    onColor: black,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: yellow600Dark,
    onColor: yellow600Dark,
  },
  light: {
    color: yellow600Light,
    onColor: yellow600Light,
  },
  normal: {
    color: yellow600,
    onColor: yellow600,
  },
};

export const mdYellow600: MaterialPaletteColorItem = {
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
        disabledColor: disabledGrey600,
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
  name: 'Yellow',
  tone: '600',
};
