/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import { TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';

import { InjectableSubTheme } from '../subcomponents/InjectableSubTheme';
// tslint:disable-next-line:max-line-length
import { DefaultTouchableSubcomponent } from '../touchable/DefaultTouchableSubcomponent';
import { getRawSubTheme } from './getRawSubTheme';

export const getRawInjectableTouchableSubTheme = <
  ComponentProps
>(): InjectableSubTheme<
  ComponentProps,
  TouchableWithoutFeedbackProps,
  ViewStyle
> =>
  merge(
    {},
    {
      component: DefaultTouchableSubcomponent,
      ...getRawSubTheme<TouchableWithoutFeedbackProps, ViewStyle>(),
    },
  );
