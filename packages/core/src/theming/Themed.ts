import { ComponentsTheme } from './ComponentsTheme';
import { ColorTheme } from './palette/ColorTheme';
import { PaletteTheme } from './palette/PaletteTheme';

export interface Themed {
  readonly colorTheme: ColorTheme;
  readonly componentsTheme: ComponentsTheme;
  readonly paletteTheme: PaletteTheme;
}

export type OptionalThemed = Partial<Themed>;
