import { ColorTheme } from './ColorTheme';
import { Theme } from './PurpleTealTheme';

type ThemedColorGetter = (
  props: {
    colorTheme?: ColorTheme;
    onColor?: boolean;
    theme: Theme;
  },
) => string;

export const getThemedColor: ThemedColorGetter = ({
  colorTheme = ColorTheme.PRIMARY_NORMAL,
  onColor,
  theme,
}): string => {
  switch (colorTheme) {
    case ColorTheme.PRIMARY_DARK:
      return onColor
        ? theme.palette.primary.dark.onColor
        : theme.palette.primary.dark.color;
    case ColorTheme.PRIMARY_LIGHT:
      return onColor
        ? theme.palette.primary.light.onColor
        : theme.palette.primary.light.color;
    case ColorTheme.PRIMARY_NORMAL:
      return onColor
        ? theme.palette.primary.normal.onColor
        : theme.palette.primary.normal.color;
    case ColorTheme.SECONDARY_DARK:
      return onColor
        ? theme.palette.secondary.dark.onColor
        : theme.palette.secondary.dark.color;
    case ColorTheme.SECONDARY_LIGHT:
      return onColor
        ? theme.palette.secondary.light.onColor
        : theme.palette.secondary.light.color;
    case ColorTheme.SECONDARY_NORMAL:
      return onColor
        ? theme.palette.secondary.normal.onColor
        : theme.palette.secondary.normal.color;
    default:
      return onColor
        ? theme.palette.primary.light.onColor
        : theme.palette.primary.light.color;
  }
};
