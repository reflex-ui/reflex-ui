import {
  ComponentsTheme,
  createComponentsTheme as createComponentsThemeCore,
  OptionalComponentsTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { animatedMaterialDesignTheme } from './animatedMaterialDesignTheme';

export const createAnimatedComponentsTheme = (
  theme: OptionalComponentsTheme = {},
): ComponentsTheme =>
  createComponentsThemeCore(merge(animatedMaterialDesignTheme, theme));
