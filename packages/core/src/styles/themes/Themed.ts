import { ColorTheme } from './ColorTheme';
import { Theme } from './PurpleTealTheme';

export interface OptionalThemed {
  readonly colorTheme?: ColorTheme;
  readonly theme?: Theme;
}

export interface Themed {
  readonly colorTheme: ColorTheme;
  readonly theme: Theme;
}
