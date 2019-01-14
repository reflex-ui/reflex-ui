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
import { disabledGrey600_400_600 } from '../disabled/uncontained/disabledGrey600_400_600';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';

export const orange600 = '#fb8c00';
export const orange600Dark = '#c25e00';
export const orange600Light = '#ffbd45';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: orange600Dark,
    onColor: black,
  },
  light: {
    color: orange600Light,
    onColor: black,
  },
  normal: {
    color: orange600,
    onColor: black,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: orange600Dark,
    onColor: orange600Dark,
  },
  light: {
    color: orange600Light,
    onColor: orange600Light,
  },
  normal: {
    color: orange600,
    onColor: orange600,
  },
};

export const mdOrange600: MaterialPaletteColorItem = {
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
        disabledColor: disabledGrey600_400_600,
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
  name: 'Orange',
  tone: '600',
};
