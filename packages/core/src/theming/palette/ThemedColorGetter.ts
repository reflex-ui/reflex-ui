import { ColorTheme } from './ColorTheme';
import { PaletteTheme } from './PaletteTheme';

export type ThemedColorGetter = (
  props: {
    colorTheme?: ColorTheme;
    onColor?: boolean;
    palette: PaletteTheme;
  },
) => string;
