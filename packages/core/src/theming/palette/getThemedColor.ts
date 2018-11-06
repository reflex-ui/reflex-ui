import { ColorTheme } from './ColorTheme';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedColor: ThemedColorGetter = ({
  colorTheme = ColorTheme.PRIMARY_NORMAL,
  onColor,
  paletteTheme,
}): string => {
  switch (colorTheme) {
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
    default:
      return onColor
        ? paletteTheme.primary.light.onColor
        : paletteTheme.primary.light.color;
  }
};
