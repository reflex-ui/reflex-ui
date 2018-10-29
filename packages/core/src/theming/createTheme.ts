import merge from 'lodash/merge';

import { rawTheme } from './rawTheme';
import { OptionalTheme, Theme } from './Theme';

export const createTheme = (theme: OptionalTheme): Theme =>
  merge({}, rawTheme, theme);
