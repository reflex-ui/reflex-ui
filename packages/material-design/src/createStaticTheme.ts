import {
  createTheme as createThemeCore,
  OptionalTheme,
  Theme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { staticMaterialDesignTheme } from './staticMaterialDesignTheme';

export const createStaticTheme = (theme: OptionalTheme): Theme =>
  createThemeCore(merge(staticMaterialDesignTheme, theme));
