/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityType } from '@reflex-ui/core';
import * as Color from 'color';
import { ColorByInteractivityData } from './ColorByInteractivityData';

export const getInlayColorByInteractivity = ({
  color,
  type,
}: ColorByInteractivityData): string => {
  if (
    type === InteractivityType.DISABLED ||
    type === InteractivityType.ENABLED
  ) {
    return color;
  }

  const rgbColor: Color = Color.hsl(color);
  const luminosity = rgbColor.luminosity();
  let rate;

  if (type === InteractivityType.HOVERED) {
    if (luminosity > 0.97) {
      rate = 0.04;
    } else if (luminosity > 0.7 || luminosity < 0.1) {
      rate = 0.16;
    } else {
      rate = 0.08;
    }
  } else if (type === InteractivityType.FOCUSED) {
    if (luminosity > 0.97) {
      rate = 0.12;
    } else if (luminosity > 0.7 || luminosity < 0.1) {
      rate = 0.36;
    } else {
      rate = 0.24;
    }
  } else {
    if (luminosity > 0.97) {
      rate = 0.16;
    } else if (luminosity > 0.7 || luminosity < 0.1) {
      rate = 0.42;
    } else {
      rate = 0.32;
    }
  }

  if (rgbColor.luminosity() < 0.02) return rgbColor.fade(rate).toString();

  return rgbColor.isLight()
    ? rgbColor.darken(rate).toString()
    : rgbColor.lighten(rate).toString();
};
