import { InteractivityType } from '../interactivity/InteractivityType';
import { ColorTheme } from './ColorTheme';
import { PaletteTheme } from './PaletteTheme';

export type ThemedColorGetter = (
  props: {
    readonly colorTheme?: ColorTheme;
    readonly interactivityType?: InteractivityType;
    readonly onColor?: boolean;
    readonly paletteTheme: PaletteTheme;
  },
) => string;
