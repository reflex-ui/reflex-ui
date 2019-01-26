/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { getRawInjectableTouchableSubTheme } from '../raw/getRawInjectableTouchableSubTheme';
// tslint:disable-next-line:max-line-length
import { getRawInjectableViewSubTheme } from '../raw/getRawInjectableViewSubTheme';
import { TouchableSurfaceProps, TouchableSurfaceTheme } from './';

// tslint:disable-next-line:max-line-length
export const rawInjectableTouchableSurfaceTouchableSubTheme = getRawInjectableTouchableSubTheme<
  TouchableSurfaceProps
>();

// tslint:disable-next-line:max-line-length
export const rawInjectableTouchableSurfaceViewSubTheme = getRawInjectableViewSubTheme<
  TouchableSurfaceProps
>();

export const rawTouchableSurfaceTheme: TouchableSurfaceTheme = {
  container: rawInjectableTouchableSurfaceViewSubTheme,
  touchable: rawInjectableTouchableSurfaceTouchableSubTheme,
};
