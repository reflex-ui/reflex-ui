import {
  ButtonVariantTheme,
  OptionalButtonVariantTheme,
} from './ButtonVariantTheme';

export interface ButtonTheme {
  readonly allVariants: ButtonVariantTheme;
  readonly contained: ButtonVariantTheme;
  readonly containedRaised: ButtonVariantTheme;
  readonly default: ButtonVariantTheme;
  readonly fab: ButtonVariantTheme;
  readonly outlined: ButtonVariantTheme;
  readonly xfab: ButtonVariantTheme;
}

export interface OptionalButtonTheme {
  readonly allVariants?: OptionalButtonVariantTheme;
  readonly contained?: OptionalButtonVariantTheme;
  readonly containedRaised?: OptionalButtonVariantTheme;
  readonly default?: OptionalButtonVariantTheme;
  readonly fab?: OptionalButtonVariantTheme;
  readonly outlined?: OptionalButtonVariantTheme;
  readonly xfab?: OptionalButtonVariantTheme;
}
