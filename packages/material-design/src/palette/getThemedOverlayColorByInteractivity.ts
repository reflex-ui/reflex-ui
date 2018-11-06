import { getThemedColor } from '@reflex-ui/core';
// prettier-ignore
import {
  getOverlayColorByInteractivity,
} from './getOverlayColorByInteractivity';
// prettier-ignore
import {
  ThemedColorByInteractivityData,
} from './ThemedColorByInteractivityData';

export const getThemedOverlayColorByInteractivity = ({
  colorTheme,
  interactivityType,
  paletteTheme,
}: ThemedColorByInteractivityData): string =>
  getOverlayColorByInteractivity({
    color: getThemedColor({ colorTheme, paletteTheme }),
    type: interactivityType,
  });
