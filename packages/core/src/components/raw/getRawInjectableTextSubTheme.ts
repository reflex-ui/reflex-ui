/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import { TextProps, TextStyle } from 'react-native';

import { InjectableSubTheme } from '../subcomponents/InjectableSubTheme';
import { DefaultTextSubcomponent } from '../typography/DefaultTextSubcomponent';
import { getRawSubTheme } from './getRawSubTheme';

export const getRawInjectableTextSubTheme = <
  ComponentProps
>(): InjectableSubTheme<ComponentProps, TextProps, TextStyle> =>
  merge(
    {},
    {
      component: DefaultTextSubcomponent,
      ...getRawSubTheme<TextProps, TextStyle>(),
    },
  );
