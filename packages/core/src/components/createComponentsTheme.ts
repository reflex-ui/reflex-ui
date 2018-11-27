import merge from 'lodash/merge';

import { ComponentsTheme, OptionalComponentsTheme } from './ComponentsTheme';
import { rawComponentsTheme } from './raw/rawComponentsTheme';

export const createComponentsTheme = (
  theme: OptionalComponentsTheme,
): ComponentsTheme => merge({}, rawComponentsTheme, theme);
