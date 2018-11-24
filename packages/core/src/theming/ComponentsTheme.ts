import {
  ButtonVariantsTheme,
  OptionalButtonVariantsTheme,
} from '../components/buttons';
import {
  IconWrapperTheme,
  OptionalIconWrapperTheme,
} from '../components/icons';
import {
  OptionalTypographyTheme,
  TypographyTheme,
} from '../components/typography';

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
