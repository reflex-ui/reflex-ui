import { ColorTheme } from './ColorTheme';
import { PaletteTheme } from './PaletteTheme';

export interface PaletteThemeProps {
  readonly colorTheme: ColorTheme;
  readonly paletteTheme: PaletteTheme;
}

export type OptionalPaletteThemeProps = Partial<PaletteThemeProps>;
