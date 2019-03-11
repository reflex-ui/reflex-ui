/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { getRawInjectableViewSubTheme } from '../raw/getRawInjectableViewSubTheme';
import { RfxViewProps, RfxViewTheme, RfxViewVariantsTheme } from './';

export const rawInjectableRfxViewViewSubTheme = getRawInjectableViewSubTheme<
  RfxViewProps
>();

export const rawRfxViewTheme: RfxViewTheme = {
  container: rawInjectableRfxViewViewSubTheme,
};

export const rawRfxViewVariantsTheme: RfxViewVariantsTheme = {
  column: rawRfxViewTheme,
  row: rawRfxViewTheme,
};
