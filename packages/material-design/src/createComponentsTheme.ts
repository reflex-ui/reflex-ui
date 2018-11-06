import {
  ComponentsTheme,
  createComponentsTheme as createComponentsThemeCore,
  OptionalComponentsTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { materialDesignTheme } from './materialDesignTheme';

export const createComponentsTheme = (
  theme: OptionalComponentsTheme = {},
): ComponentsTheme =>
  createComponentsThemeCore(merge(materialDesignTheme, theme));
