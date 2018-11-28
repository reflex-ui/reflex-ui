import { ButtonVariantsTheme, OptionalButtonVariantsTheme } from './buttons';
import { SuperIconTheme, OptionalSuperIconTheme } from './icons';
import { OptionalTypographyTheme, TypographyTheme } from './typography';

export interface ComponentsTheme {
  readonly button: ButtonVariantsTheme;
  readonly icon: SuperIconTheme;
  readonly typography: TypographyTheme;
}

export interface OptionalComponentsTheme {
  readonly button?: OptionalButtonVariantsTheme;
  readonly icon?: OptionalSuperIconTheme;
  readonly typography?: OptionalTypographyTheme;
}
