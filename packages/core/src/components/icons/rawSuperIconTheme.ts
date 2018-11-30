/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, ViewProps } from 'react-native';

import { getRawSizedTheme } from '../raw/getRawSizedTheme';
import { DefaultViewSubcomponent } from '../views/DefaultViewSubcomponent';
import { SuperIconProps } from './SuperIconProps';
import { SuperIconTheme } from './SuperIconTheme';

export const rawSuperIconTheme: SuperIconTheme = {
  container: {
    component: DefaultViewSubcomponent,
    ...getRawSizedTheme<SuperIconProps, ViewProps>(),
  },
  icon: getRawSizedTheme<SuperIconProps, TextProps>(),
};
