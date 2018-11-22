import { ButtonTheme, OptionalButtonTheme } from '../components/buttons';
import {
  IconWrapperTheme,
  OptionalIconWrapperTheme,
} from '../components/icons';
import {
  OptionalTypographyTheme,
  TypographyTheme,
} from '../components/typography';

export interface ComponentsTheme {
  readonly button: ButtonTheme;
  readonly icon: IconWrapperTheme;
  readonly typography: TypographyTheme;
}

export interface OptionalComponentsTheme {
  readonly button?: OptionalButtonTheme;
  readonly icon?: OptionalIconWrapperTheme;
  readonly typography?: OptionalTypographyTheme;
}
