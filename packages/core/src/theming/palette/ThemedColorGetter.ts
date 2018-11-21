import { InteractivityType } from '../../interactivity';
import { ColorTheme } from './ColorTheme';
import { PaletteTheme } from './PaletteTheme';

export type ThemedColorGetter = (
  props: {
    colorTheme?: ColorTheme;
    interactivityType?: InteractivityType;
    onColor?: boolean;
    paletteTheme: PaletteTheme;
  },
) => string;
