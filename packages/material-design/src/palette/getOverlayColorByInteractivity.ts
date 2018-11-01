import { InteractivityType } from '@reflex-ui/core';
import * as Color from 'color';
import { ColorByInteractivityData } from './ColorByInteractivityData';

export const getOverlayColorByInteractivity = ({
  color,
  type,
}: ColorByInteractivityData): string => {
  switch (type) {
    case InteractivityType.DISABLED:
      return 'transparent';
    case InteractivityType.ENABLED:
      return 'transparent';
    case InteractivityType.FOCUSED:
      return Color.rgb(color)
        .fade(0.89)
        .toString();
    case InteractivityType.HOVERED:
      return Color.rgb(color)
        .fade(0.94)
        .toString();
    case InteractivityType.PRESSED:
      return Color.rgb(color)
        .fade(0.81)
        .toString();
    default:
      return 'transparent';
  }
};
