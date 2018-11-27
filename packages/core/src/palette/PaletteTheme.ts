import { PaletteColor } from './PaletteColor';

export interface PaletteTheme {
  readonly background: PaletteColor;
  readonly disabled: PaletteColor;
  readonly error: PaletteColor;
  readonly primary: PaletteColor;
  readonly secondary: PaletteColor;
  readonly success: PaletteColor;
  readonly surface: PaletteColor;
  readonly warning: PaletteColor;
}

export type OptionalPaletteTheme = Partial<PaletteTheme>;
