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
import { disabledGrey500_500_400 } from '../disabled/uncontained/disabledGrey500_500_400';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { white } from '../white/white';

export const deepPurple500 = '#673ab7';
export const deepPurple500Dark = '#320b86';
export const deepPurple500Light = '#9a67ea';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: deepPurple500Dark,
    onColor: white,
  },
  light: {
    color: deepPurple500Light,
    onColor: black,
  },
  normal: {
    color: deepPurple500,
    onColor: white,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: deepPurple500Dark,
    onColor: deepPurple500Dark,
  },
  light: {
    color: deepPurple500Light,
    onColor: deepPurple500Light,
  },
  normal: {
    color: deepPurple500,
    onColor: deepPurple500,
  },
};

export const mdDeepPurple500: MaterialPaletteColorItem = {
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
        disabledColor: disabledGrey500_500_400,
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
  name: 'Deep Purple',
  tone: '500',
};
