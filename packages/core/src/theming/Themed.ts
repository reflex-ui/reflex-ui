import { ColorTheme } from './palette';
import { Theme } from './Theme';

export interface Themed {
  readonly colorTheme: ColorTheme;
  readonly theme: Theme;
}

export interface OptionalThemed {
  readonly colorTheme?: ColorTheme;
  readonly theme?: Theme;
}
