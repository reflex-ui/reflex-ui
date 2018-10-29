import { OptionalTheme } from '@reflex-ui/core';

import { buttonTheme } from './buttons/buttonTheme';
import { iconTheme } from './icons/iconTheme';
import { purpleTealPaletteTheme } from './palette/purpleTealPaletteTheme';
import { typographyTheme } from './typography/typographyTheme';

export const materialDesignTheme: OptionalTheme = {
  components: {
    button: buttonTheme,
    icon: iconTheme,
    typography: typographyTheme,
  },
  palette: purpleTealPaletteTheme,
};
