import { ButtonTheme, OptionalButtonTheme } from './ButtonTheme';

export interface ButtonVariantsTheme {
  readonly allVariants: ButtonTheme;
  readonly contained: ButtonTheme;
  readonly containedShaped: ButtonTheme;
  readonly default: ButtonTheme;
  readonly fab: ButtonTheme;
  readonly highlighted: ButtonTheme;
  readonly icon: ButtonTheme;
  readonly outlined: ButtonTheme;
  readonly outlinedShaped: ButtonTheme;
  readonly xfab: ButtonTheme;
}

export type OptionalButtonVariantsTheme = {
  [P in keyof ButtonVariantsTheme]?: OptionalButtonTheme
};
