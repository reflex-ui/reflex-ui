import { ButtonTheme, OptionalButtonTheme } from '../components/buttons';
import { IconTheme, OptionalIconTheme } from '../components/icons';
import {
  OptionalTypographyTheme,
  TypographyTheme,
} from '../components/typography';

export interface ComponentsTheme {
  readonly button: ButtonTheme;
  readonly icon: IconTheme;
  readonly typography: TypographyTheme;
}

export interface OptionalComponentsTheme {
  readonly button?: OptionalButtonTheme;
  readonly icon?: OptionalIconTheme;
  readonly typography?: OptionalTypographyTheme;
}
