import { OptionalComponentsTheme } from '@reflex-ui/core';

import { animatedButtonTheme } from './buttons/animatedTheme';
import { iconTheme } from './icons/iconTheme';
import { typographyTheme } from './typography/typographyTheme';

export const animatedMaterialDesignTheme: OptionalComponentsTheme = {
  button: animatedButtonTheme,
  icon: iconTheme,
  typography: typographyTheme,
};
