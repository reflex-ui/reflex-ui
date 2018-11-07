import { OptionalPaletteColor, PaletteColor } from './PaletteColor';

export interface PaletteTheme {
  readonly background: PaletteColor;
  readonly error: PaletteColor;
  readonly primary: PaletteColor;
  readonly secondary: PaletteColor;
  readonly success: PaletteColor;
  readonly surface: PaletteColor;
  readonly warning: PaletteColor;
}

export interface OptionalPaletteTheme {
  readonly background?: OptionalPaletteColor;
  readonly error?: OptionalPaletteColor;
  readonly primary?: OptionalPaletteColor;
  readonly secondary?: OptionalPaletteColor;
  readonly success?: OptionalPaletteColor;
  readonly surface?: OptionalPaletteColor;
  readonly warning?: OptionalPaletteColor;
}
