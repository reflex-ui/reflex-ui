import { ComponentsTheme } from './ComponentsTheme';
import { PaletteTheme } from './palette';

export interface Theme {
  readonly components: ComponentsTheme;
  readonly palette: PaletteTheme;
}
