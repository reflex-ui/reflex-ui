/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractionType } from '@reflex-ui/core';
import * as Color from 'color';
import { ColorByInteractionGetterInput } from './ColorByInteractionGetterInput';

export const getInlayColorByInteraction = ({
  color,
  type,
}: ColorByInteractionGetterInput): string => {
  if (type === InteractionType.Disabled || type === InteractionType.Enabled) {
    return color;
  }

  const rgbColor: Color = Color.hsl(color);
  const luminosity = rgbColor.luminosity();
  let rate;

  if (type === InteractionType.Hovered) {
    if (luminosity > 0.97) {
      rate = 0.04;
    } else if (luminosity > 0.7 || luminosity < 0.1) {
      rate = 0.16;
    } else {
      rate = 0.08;
    }
  } else if (
    type === InteractionType.Focused ||
    type === InteractionType.Activated
  ) {
    if (luminosity > 0.97) {
      rate = 0.12;
    } else if (luminosity > 0.7 || luminosity < 0.1) {
      rate = 0.36;
    } else {
      rate = 0.24;
    }
  } else {
    // InteractionType.Pressed
    if (luminosity > 0.97) {
      rate = 0.16;
    } else if (luminosity > 0.7 || luminosity < 0.1) {
      rate = 0.42;
    } else {
      rate = 0.32;
    }
  }

  /*
   * lighten() doesn't work on black color (it returns black),
   * so this condition is added specially to fix that.
   * Using rgbColor.fade(rate) here works well when we are using it
   * to replace the original target element's background color
   * by the new one, but it doesn't work well when using this color
   * in an overlay element, like we do with the ripple effect,
   * since fade() doesn't return a fully opaque color,
   * but one with some transparency.
   * So we opt for mix() here, which returns a fully
   * opaque color that works well on both cases.
   */
  if (luminosity < 0.02) {
    return rgbColor.mix(Color.rgb('#fff'), rate / 1.5).toString();
  }
  /**/

  return rgbColor.isLight()
    ? rgbColor.darken(rate).toString()
    : rgbColor.lighten(rate).toString();
};
