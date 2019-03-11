/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

// tslint:disable-next-line:max-line-length
import { getRawInjectableViewSubTheme } from '../raw/getRawInjectableViewSubTheme';
import { getRawSubTheme } from '../raw/getRawSubTheme';
import { RfxSvgProps } from './RfxSvgProps';
import { RfxSvgTheme } from './RfxSvgTheme';
import { RfxSvgVariantsTheme } from './RfxSvgVariantsTheme';

export const rawInjectableRfxSvgViewSubTheme = getRawInjectableViewSubTheme<
  RfxSvgProps
>();

export const rawRfxSvgSvgSubTheme = getRawSubTheme<SvgProps, ViewStyle>();

export const rawRfxSvgTheme: RfxSvgTheme = {
  container: rawInjectableRfxSvgViewSubTheme,
  svg: rawRfxSvgSvgSubTheme,
};

export const rawRfxSvgVariantsTheme: RfxSvgVariantsTheme = {
  rfxSvg: rawRfxSvgTheme,
  svgIcon: rawRfxSvgTheme,
};
