import { ButtonTheme } from '../components/buttons';
import { IconTheme } from '../components/icons';
import { TypographyTheme } from '../components/typography';

export interface ComponentsTheme {
  readonly button: ButtonTheme;
  readonly icon: IconTheme;
  readonly typography: TypographyTheme;
}
