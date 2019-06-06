/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorGamut, LayeredColor, PaletteColor } from '@reflex-ui/core';

import { white } from '../white/white';

/*
 * In order to stick to the exact same color system to provide
 * Backdrop colors, we need to create a PaletteColor object
 * exactly like any other colors, so we don't need to change anything
 * or deal with Backdrop colors as exceptions.
 * But Blackdrop object colors don't have to bother about different colors
 * for interactions as it's not supposed to provide any
 * color feedback, so we can just use the same LayeredColor object
 * for all interaction states.
 */

const blackBackdropLayeredColor: LayeredColor = {
  color: 'rgba(0, 0, 0, 0.5)',
  onColor: white,
};

const blackBackdropColorGamut: ColorGamut = {
  contained: blackBackdropLayeredColor,
  containedInverted: blackBackdropLayeredColor,
  uncontained: blackBackdropLayeredColor,
  uncontainedInverted: blackBackdropLayeredColor,
};

export const mdBlackBackdrop: PaletteColor = {
  color: {
    activated: blackBackdropColorGamut,
    disabled: blackBackdropColorGamut,
    enabled: blackBackdropColorGamut,
    focused: blackBackdropColorGamut,
    hovered: blackBackdropColorGamut,
    pressed: blackBackdropColorGamut,
  },
  name: 'Black Backdrop',
};
