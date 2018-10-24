import { rawButtonTheme } from '../components/buttons';
import { rawIconTheme } from '../components/icons';
import { rawTypographyTheme } from '../components/typography';
import { purpleTealPaletteTheme } from './palette';
import { Theme } from './Theme';

export const rawTheme: Theme = {
  components: {
    button: rawButtonTheme,
    icon: rawIconTheme,
    typography: rawTypographyTheme,
  },
  palette: purpleTealPaletteTheme,
};
