import { OptionalTheme } from '@reflex-ui/core';

import { staticButtonTheme } from './buttons/staticButtonTheme';
import { iconTheme } from './icons/iconTheme';
import { purpleTealPaletteTheme } from './palette/purpleTealPaletteTheme';
import { typographyTheme } from './typography/typographyTheme';

export const staticMaterialDesignTheme: OptionalTheme = {
  components: {
    button: staticButtonTheme,
    icon: iconTheme,
    typography: typographyTheme,
  },
  palette: purpleTealPaletteTheme,
};
