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
import { disabledGrey400_500_600 } from '../disabled/uncontained/disabledGrey400_500_600';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { white } from '../white/white';

export const blue500 = '#2196f3';
export const blue500Dark = '#0069c0';
export const blue500Light = '#6ec6ff';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: blue500Dark,
    onColor: white,
  },
  light: {
    color: blue500Light,
    onColor: black,
  },
  normal: {
    color: blue500,
    onColor: black,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: blue500Dark,
    onColor: blue500Dark,
  },
  light: {
    color: blue500Light,
    onColor: blue500Light,
  },
  normal: {
    color: blue500,
    onColor: blue500,
  },
};

export const mdBlue500: MaterialPaletteColorItem = {
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
        disabledColor: disabledGrey400_500_600,
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
  name: 'Blue',
  tone: '500',
};
