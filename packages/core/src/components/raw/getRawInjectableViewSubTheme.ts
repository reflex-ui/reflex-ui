/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { InjectableSubTheme } from '../subcomponents/InjectableSubTheme';
import { DefaultViewSubcomponent } from '../views/DefaultViewSubcomponent';
import { getRawSubTheme } from './getRawSubTheme';

export const getRawInjectableViewSubTheme = <
  ComponentProps
>(): InjectableSubTheme<ComponentProps, ViewProps, ViewStyle> =>
  merge(
    {},
    {
      component: DefaultViewSubcomponent,
      ...getRawSubTheme<ViewProps, ViewStyle>(),
    },
  );
