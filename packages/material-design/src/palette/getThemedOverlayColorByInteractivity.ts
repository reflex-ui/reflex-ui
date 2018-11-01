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
  interactivityState,
  theme: { palette },
}: ThemedColorByInteractivityData): string =>
  getOverlayColorByInteractivity({
    color: getThemedColor({ colorTheme, palette }),
    type: interactivityState ? interactivityState.type : undefined,
  });
