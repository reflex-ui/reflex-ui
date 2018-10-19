import { rawButtonTheme } from '../components/buttons';
import { rawTypographyTheme } from '../components/typography';
import { purpleTealPaletteTheme } from './palette';
import { Theme } from './Theme';

export const rawTheme: Theme = {
  components: {
    button: rawButtonTheme,
    typography: rawTypographyTheme,
  },
  palette: purpleTealPaletteTheme,
};
