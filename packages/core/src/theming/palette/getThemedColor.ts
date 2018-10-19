import { ColorTheme } from './ColorTheme';
import { ThemedColorGetter } from './ThemedColorGetter';

export const getThemedColor: ThemedColorGetter = ({
  colorTheme = ColorTheme.PRIMARY_NORMAL,
  onColor,
  palette,
}): string => {
  switch (colorTheme) {
    case ColorTheme.PRIMARY_DARK:
      return onColor
        ? palette.primary.dark.onColor
        : palette.primary.dark.color;
    case ColorTheme.PRIMARY_LIGHT:
      return onColor
        ? palette.primary.light.onColor
        : palette.primary.light.color;
    case ColorTheme.PRIMARY_NORMAL:
      return onColor
        ? palette.primary.normal.onColor
        : palette.primary.normal.color;
    case ColorTheme.SECONDARY_DARK:
      return onColor
        ? palette.secondary.dark.onColor
        : palette.secondary.dark.color;
    case ColorTheme.SECONDARY_LIGHT:
      return onColor
        ? palette.secondary.light.onColor
        : palette.secondary.light.color;
    case ColorTheme.SECONDARY_NORMAL:
      return onColor
        ? palette.secondary.normal.onColor
        : palette.secondary.normal.color;
    default:
      return onColor
        ? palette.primary.light.onColor
        : palette.primary.light.color;
  }
};
