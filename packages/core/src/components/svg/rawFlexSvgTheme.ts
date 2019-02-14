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
import { FlexSvgProps } from './FlexSvgProps';
import { FlexSvgTheme } from './FlexSvgTheme';
import { FlexSvgVariantsTheme } from './FlexSvgVariantsTheme';

export const rawInjectableFlexSvgViewSubTheme = getRawInjectableViewSubTheme<
  FlexSvgProps
>();

export const rawFlexSvgSvgSubTheme = getRawSubTheme<SvgProps, ViewStyle>();

export const rawFlexSvgTheme: FlexSvgTheme = {
  container: rawInjectableFlexSvgViewSubTheme,
  svg: rawFlexSvgSvgSubTheme,
};

export const rawFlexSvgVariantsTheme: FlexSvgVariantsTheme = {
  flexSvg: rawFlexSvgTheme,
  svgIcon: rawFlexSvgTheme,
};
