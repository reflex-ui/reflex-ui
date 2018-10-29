import { ComponentsTheme, OptionalComponentsTheme } from './ComponentsTheme';
import { OptionalPaletteTheme, PaletteTheme } from './palette';

export interface Theme {
  readonly components: ComponentsTheme;
  readonly palette: PaletteTheme;
}

export interface OptionalTheme {
  readonly components?: OptionalComponentsTheme;
  readonly palette?: OptionalPaletteTheme;
}
