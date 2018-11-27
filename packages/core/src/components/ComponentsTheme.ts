import { ButtonVariantsTheme, OptionalButtonVariantsTheme } from './buttons';
import { IconWrapperTheme, OptionalIconWrapperTheme } from './icons';
import { OptionalTypographyTheme, TypographyTheme } from './typography';

export interface ComponentsTheme {
  readonly button: ButtonVariantsTheme;
  readonly icon: IconWrapperTheme;
  readonly typography: TypographyTheme;
}

export interface OptionalComponentsTheme {
  readonly button?: OptionalButtonVariantsTheme;
  readonly icon?: OptionalIconWrapperTheme;
  readonly typography?: OptionalTypographyTheme;
}
