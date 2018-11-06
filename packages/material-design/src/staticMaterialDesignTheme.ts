import { OptionalComponentsTheme } from '@reflex-ui/core';

import { staticButtonTheme } from './buttons/staticButtonTheme';
import { iconTheme } from './icons/iconTheme';
import { typographyTheme } from './typography/typographyTheme';

export const staticMaterialDesignTheme: OptionalComponentsTheme = {
  button: staticButtonTheme,
  icon: iconTheme,
  typography: typographyTheme,
};
