import {
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalButtonTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  getDefaultButtonContainerProps,
  getDefaultButtonRippleColor,
} from '../default';
import { withRippleEffect } from '../withRippleEffect';
import { iconStaticButtonTheme } from './staticTheme';

const optionalIconButtonTheme: OptionalButtonTheme = {
  container: {
    allSizes: {
      pressed: {
        getProps: props =>
          getDefaultButtonContainerProps({
            ...props,
            interactivityState: {
              ...props.interactivityState,
              type: InteractivityType.DISABLED,
            },
          }),
      },
    },
    component: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultViewSubcomponent),
  },
};

export const iconButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, iconStaticButtonTheme, optionalIconButtonTheme);
