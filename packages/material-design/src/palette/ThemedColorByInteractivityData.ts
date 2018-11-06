import { ColorTheme, InteractivityType, PaletteTheme } from '@reflex-ui/core';

export interface ThemedColorByInteractivityData {
  readonly colorTheme: ColorTheme;
  readonly interactivityType: InteractivityType;
  readonly paletteTheme: PaletteTheme;
}
