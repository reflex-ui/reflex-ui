import {
  ComponentsTheme,
  createComponentsTheme as createThemeCore,
  OptionalComponentsTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { materialDesignTheme } from './materialDesignTheme';

export const createComponentsTheme = (
  theme: OptionalComponentsTheme = {},
): ComponentsTheme => createThemeCore(merge(materialDesignTheme, theme));
