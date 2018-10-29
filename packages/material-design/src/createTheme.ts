import {
  createTheme as createThemeCore,
  OptionalTheme,
  Theme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { materialDesignTheme } from './materialDesignTheme';

export const createTheme = (theme: OptionalTheme): Theme =>
  createThemeCore(merge(materialDesignTheme, theme));
