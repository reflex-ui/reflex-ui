import { PaletteColorVariant } from './PaletteColorVariant';

export interface PaletteColor {
  readonly dark: PaletteColorVariant;
  readonly light: PaletteColorVariant;
  readonly normal: PaletteColorVariant;
}

export type OptionalPaletteColor = Partial<PaletteColor>;
