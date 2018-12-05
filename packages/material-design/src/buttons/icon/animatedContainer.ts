/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  SubTheme,
} from '@reflex-ui/core';
import { ViewProps } from 'react-native';

import {
  getAnimatedPressedDefaultButtonContainerProps,
  getDefaultButtonRippleColor,
} from '../default';
import { withRippleEffect } from '../withRippleEffect';

export const iconAnimatedButtonContainerTheme: SubTheme<
  ButtonProps,
  ViewProps
> &
  OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  > = {
  // tslint:disable-next-line:ter-indent
  allSizes: {
    pressed: {
      getProps: props =>
        getAnimatedPressedDefaultButtonContainerProps({
          ...props,
          interactivityState: {
            ...props.interactivityState,
            type: InteractivityType.DISABLED,
          },
        }),
    },
  },
  // tslint:disable-next-line:ter-indent
  component: withRippleEffect({
    getRippleColor: getDefaultButtonRippleColor,
  })(DefaultViewSubcomponent),
  // tslint:disable-next-line:ter-indent
};
