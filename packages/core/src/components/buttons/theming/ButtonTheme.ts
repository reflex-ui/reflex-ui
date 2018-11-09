import {
  ButtonVariantTheme,
  OptionalButtonVariantTheme,
} from './ButtonVariantTheme';

export interface ButtonTheme {
  readonly allVariants: ButtonVariantTheme;
  readonly contained: ButtonVariantTheme;
  readonly containedShaped: ButtonVariantTheme;
  readonly default: ButtonVariantTheme;
  readonly fab: ButtonVariantTheme;
  readonly highlighted: ButtonVariantTheme;
  readonly icon: ButtonVariantTheme;
  readonly outlined: ButtonVariantTheme;
  readonly outlinedShaped: ButtonVariantTheme;
  readonly xfab: ButtonVariantTheme;
}

export interface OptionalButtonTheme {
  readonly allVariants?: OptionalButtonVariantTheme;
  readonly contained?: OptionalButtonVariantTheme;
  readonly containedShaped?: OptionalButtonVariantTheme;
  readonly default?: OptionalButtonVariantTheme;
  readonly fab?: OptionalButtonVariantTheme;
  readonly highlighted?: OptionalButtonVariantTheme;
  readonly icon?: OptionalButtonVariantTheme;
  readonly outlined?: OptionalButtonVariantTheme;
  readonly outlinedShaped?: OptionalButtonVariantTheme;
  readonly xfab?: OptionalButtonVariantTheme;
}
