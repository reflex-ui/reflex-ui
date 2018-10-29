import {
  OptionalPaletteColorVariant,
  PaletteColorVariant,
} from './PaletteColorVariant';

export interface PaletteColor {
  readonly dark: PaletteColorVariant;
  readonly light: PaletteColorVariant;
  readonly normal: PaletteColorVariant;
}

export interface OptionalPaletteColor {
  readonly dark?: OptionalPaletteColorVariant;
  readonly light?: OptionalPaletteColorVariant;
  readonly normal?: OptionalPaletteColorVariant;
}
