import {
  ComponentsTheme,
  createComponentsTheme as createThemeCore,
  OptionalComponentsTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { staticMaterialDesignTheme } from './staticMaterialDesignTheme';

export const createStaticTheme = (
  theme: OptionalComponentsTheme,
): ComponentsTheme => createThemeCore(merge(staticMaterialDesignTheme, theme));
