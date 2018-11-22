import { InteractivityType } from '@reflex-ui/core';
import * as Color from 'color';
import { ColorByInteractivityData } from './ColorByInteractivityData';

export const getInlayColorByInteractivity = ({
  color,
  type,
}: ColorByInteractivityData): string => {
  switch (type) {
    case InteractivityType.DISABLED:
      return color;
    case InteractivityType.ENABLED:
      return color;
    case InteractivityType.FOCUSED:
      return Color.rgb(color)
        .lighten(0.35)
        .toString();
    case InteractivityType.HOVERED:
      return Color.rgb(color)
        .lighten(0.12)
        .toString();
    case InteractivityType.PRESSED:
      return Color.rgb(color)
        .lighten(0.6)
        .toString();
    default:
      return color;
  }
};