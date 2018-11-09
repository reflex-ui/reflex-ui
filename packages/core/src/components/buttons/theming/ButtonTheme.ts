import {
  ButtonVariantTheme,
  OptionalButtonVariantTheme,
} from './ButtonVariantTheme';

export interface ButtonTheme {
  readonly allVariants: ButtonVariantTheme;
  readonly contained: ButtonVariantTheme;
  readonly default: ButtonVariantTheme;
  readonly fab: ButtonVariantTheme;
  readonly highlighted: ButtonVariantTheme;
  readonly icon: ButtonVariantTheme;
  readonly outlined: ButtonVariantTheme;
  readonly shaped: ButtonVariantTheme;
  readonly xfab: ButtonVariantTheme;
}

export interface OptionalButtonTheme {
  readonly allVariants?: OptionalButtonVariantTheme;
  readonly contained?: OptionalButtonVariantTheme;
  readonly default?: OptionalButtonVariantTheme;
  readonly fab?: OptionalButtonVariantTheme;
  readonly highlighted?: OptionalButtonVariantTheme;
  readonly icon?: OptionalButtonVariantTheme;
  readonly outlined?: OptionalButtonVariantTheme;
  readonly shaped?: OptionalButtonVariantTheme;
  readonly xfab?: OptionalButtonVariantTheme;
}
