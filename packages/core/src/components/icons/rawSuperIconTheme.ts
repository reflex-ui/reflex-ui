/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';

import { getRawSubTheme } from '../raw/getRawSubTheme';
import { DefaultViewSubcomponent } from '../views/DefaultViewSubcomponent';
import { SuperIconTheme } from './SuperIconTheme';

export const rawSuperIconTheme: SuperIconTheme = {
  container: {
    component: DefaultViewSubcomponent,
    ...getRawSubTheme<ViewProps, ViewStyle>(),
  },
  icon: getRawSubTheme<TextProps, TextStyle>(),
};
