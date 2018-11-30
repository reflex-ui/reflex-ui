/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  DefaultViewSubcomponent,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  SubTheme,
} from '@reflex-ui/core';
import { ViewProps } from 'react-native';

import { withRippleEffect } from '../withRippleEffect';
import { getDefaultButtonContainerProps } from './container';
import { getDefaultButtonRippleColor } from './getDefaultButtonRippleColor';

export const defaultAnimatedButtonContainerTheme: SubTheme<
  ButtonProps,
  ViewProps
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: getDefaultButtonContainerProps,
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getDefaultButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
