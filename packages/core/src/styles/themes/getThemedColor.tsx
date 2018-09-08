import { ColorVariant } from './ColorVariant';
import { Theme } from './PurpleTealTheme';

type IGetThemedColor = (
  props: {
    colorVariant?: ColorVariant;
    onColor?: boolean;
    theme: Theme;
  },
) => string;

export const getThemedColor: IGetThemedColor = ({
  colorVariant = ColorVariant.PRIMARY_NORMAL,
  onColor,
  theme,
}): string => {
  switch (colorVariant) {
    case ColorVariant.PRIMARY_DARK:
      return onColor
        ? theme.palette.primary.dark.onColor
        : theme.palette.primary.dark.color;
    case ColorVariant.PRIMARY_LIGHT:
      return onColor
        ? theme.palette.primary.light.onColor
        : theme.palette.primary.light.color;
    case ColorVariant.PRIMARY_NORMAL:
      return onColor
        ? theme.palette.primary.normal.onColor
        : theme.palette.primary.normal.color;
    case ColorVariant.SECONDARY_DARK:
      return onColor
        ? theme.palette.secondary.dark.onColor
        : theme.palette.secondary.dark.color;
    case ColorVariant.SECONDARY_LIGHT:
      return onColor
        ? theme.palette.secondary.light.onColor
        : theme.palette.secondary.light.color;
    case ColorVariant.SECONDARY_NORMAL:
      return onColor
        ? theme.palette.secondary.normal.onColor
        : theme.palette.secondary.normal.color;
    default:
      return onColor
        ? theme.palette.primary.light.onColor
        : theme.palette.primary.light.color;
  }
};
