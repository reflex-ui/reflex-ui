import { OptionalPaletteColor, PaletteColor } from './PaletteColor';

export interface PaletteTheme {
  readonly background: PaletteColor;
  readonly error: PaletteColor;
  readonly primary: PaletteColor;
  readonly secondary: PaletteColor;
  readonly surface: PaletteColor;
}

export interface OptionalPaletteTheme {
  readonly background?: OptionalPaletteColor;
  readonly error?: OptionalPaletteColor;
  readonly primary?: OptionalPaletteColor;
  readonly secondary?: OptionalPaletteColor;
  readonly surface?: OptionalPaletteColor;
}
