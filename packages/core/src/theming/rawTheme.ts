import { rawButtonTheme } from '../components/buttons/theming/rawButtonTheme';
import { rawIconTheme } from '../components/icons/theming/rawIconTheme';
// prettier-ignore
import {
  rawTypographyTheme,
} from '../components/typography/theming/rawTypographyTheme';
import { purpleTealPaletteTheme } from './palette/purpleTealPaletteTheme';
import { Theme } from './Theme';

export const rawTheme: Theme = {
  components: {
    button: rawButtonTheme,
    icon: rawIconTheme,
    typography: rawTypographyTheme,
  },
  palette: purpleTealPaletteTheme,
};
