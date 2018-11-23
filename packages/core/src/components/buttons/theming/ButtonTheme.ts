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

export type OptionalButtonTheme = {
  [P in keyof ButtonTheme]?: OptionalButtonVariantTheme
};
