/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InteractivityType } from '../interactivity/InteractivityType';
import { ColorTheme } from './ColorTheme';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedColor: ThemedColorGetter = ({
  colorTheme = ColorTheme.PRIMARY_NORMAL,
  interactivityType,
  onColor,
  paletteTheme,
}): string => {
  if (interactivityType === InteractivityType.DISABLED) {
    return onColor
      ? paletteTheme.disabled.normal.onColor
      : paletteTheme.disabled.normal.color;
  }

  switch (colorTheme) {
    case ColorTheme.BACKGROUND_DARK:
      return onColor
        ? paletteTheme.background.dark.onColor
        : paletteTheme.background.dark.color;
    case ColorTheme.BACKGROUND_LIGHT:
      return onColor
        ? paletteTheme.background.light.onColor
        : paletteTheme.background.light.color;
    case ColorTheme.BACKGROUND_NORMAL:
      return onColor
        ? paletteTheme.background.normal.onColor
        : paletteTheme.background.normal.color;
    case ColorTheme.ERROR_DARK:
      return onColor
        ? paletteTheme.error.dark.onColor
        : paletteTheme.error.dark.color;
    case ColorTheme.ERROR_LIGHT:
      return onColor
        ? paletteTheme.error.light.onColor
        : paletteTheme.error.light.color;
    case ColorTheme.ERROR_NORMAL:
      return onColor
        ? paletteTheme.error.normal.onColor
        : paletteTheme.error.normal.color;
    case ColorTheme.PRIMARY_DARK:
      return onColor
        ? paletteTheme.primary.dark.onColor
        : paletteTheme.primary.dark.color;
    case ColorTheme.PRIMARY_LIGHT:
      return onColor
        ? paletteTheme.primary.light.onColor
        : paletteTheme.primary.light.color;
    case ColorTheme.PRIMARY_NORMAL:
      return onColor
        ? paletteTheme.primary.normal.onColor
        : paletteTheme.primary.normal.color;
    case ColorTheme.PRIMARY_NORMAL_INVERTED:
      return onColor
        ? paletteTheme.primary.normal.color
        : paletteTheme.primary.normal.onColor;
    case ColorTheme.SECONDARY_DARK:
      return onColor
        ? paletteTheme.secondary.dark.onColor
        : paletteTheme.secondary.dark.color;
    case ColorTheme.SECONDARY_LIGHT:
      return onColor
        ? paletteTheme.secondary.light.onColor
        : paletteTheme.secondary.light.color;
    case ColorTheme.SECONDARY_NORMAL:
      return onColor
        ? paletteTheme.secondary.normal.onColor
        : paletteTheme.secondary.normal.color;
    case ColorTheme.SUCCESS_DARK:
      return onColor
        ? paletteTheme.success.dark.onColor
        : paletteTheme.success.dark.color;
    case ColorTheme.SUCCESS_LIGHT:
      return onColor
        ? paletteTheme.success.light.onColor
        : paletteTheme.success.light.color;
    case ColorTheme.SUCCESS_NORMAL:
      return onColor
        ? paletteTheme.success.normal.onColor
        : paletteTheme.success.normal.color;
    case ColorTheme.SURFACE_DARK:
      return onColor
        ? paletteTheme.surface.dark.onColor
        : paletteTheme.surface.dark.color;
    case ColorTheme.SURFACE_LIGHT:
      return onColor
        ? paletteTheme.surface.light.onColor
        : paletteTheme.surface.light.color;
    case ColorTheme.SURFACE_NORMAL:
      return onColor
        ? paletteTheme.surface.normal.onColor
        : paletteTheme.surface.normal.color;
    case ColorTheme.WARNING_DARK:
      return onColor
        ? paletteTheme.warning.dark.onColor
        : paletteTheme.warning.dark.color;
    case ColorTheme.WARNING_LIGHT:
      return onColor
        ? paletteTheme.warning.light.onColor
        : paletteTheme.warning.light.color;
    case ColorTheme.WARNING_NORMAL:
      return onColor
        ? paletteTheme.warning.normal.onColor
        : paletteTheme.warning.normal.color;
    default:
      return onColor
        ? paletteTheme.primary.normal.onColor
        : paletteTheme.primary.normal.color;
  }
};
