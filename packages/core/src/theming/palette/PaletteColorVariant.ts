export interface PaletteColorVariant {
  readonly color: string;
  readonly onColor: string;
}

export type OptionalPaletteColorVariant = Partial<PaletteColorVariant>;
