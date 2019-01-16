/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteColorInteraction,
  fromOnColorOnlyPaletteColor,
  InteractivityPaletteColor,
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
import { disabledGrey300_500 } from '../disabled/contained/disabledGrey300_500';
import { disabledGrey500 } from '../disabled/uncontained/disabledGrey500';
// tslint:disable-next-line:max-line-length
import { disabledGrey600_500_600 } from '../disabled/uncontained/disabledGrey600_500_600';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';
import { transparent } from '../transparent';

/*
 * This is the simplest way (for this specific case) to avoid
 * circular dependency, since white depends on black,
 * and black depends on white.
*/
const black = '#000';
/**/

export const white = '#fff';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: white,
    onColor: black,
  },
  light: {
    color: white,
    onColor: black,
  },
  normal: {
    color: white,
    onColor: black,
  },
};

const whiteRegularUncontainedColorInteraction: InteractivityPaletteColor = {
  disabled: disabledGrey500,
  enabled: {
    dark: { color: transparent, onColor: white },
    light: { color: transparent, onColor: white },
    normal: { color: transparent, onColor: white },
  },
  focused: {
    dark: { color: '#e0e0e0', onColor: white },
    light: { color: '#e0e0e0', onColor: white },
    normal: { color: '#e0e0e0', onColor: white },
  },
  hovered: {
    dark: { color: '#f5f5f5', onColor: white },
    light: { color: '#f5f5f5', onColor: white },
    normal: { color: '#f5f5f5', onColor: white },
  },
  pressed: {
    dark: { color: '#d6d6d6', onColor: white },
    light: { color: '#d6d6d6', onColor: white },
    normal: { color: '#d6d6d6', onColor: white },
  },
};

export const mdWhite: MaterialPaletteColorItem = {
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
        disabledColor: disabledGrey600_500_600,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        baseColor: regularContainedBaseColor,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: whiteRegularUncontainedColorInteraction,
    },
  },
  name: 'White',
};
