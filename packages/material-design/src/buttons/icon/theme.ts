import {
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  getDefaultButtonContainerProps,
  getDefaultButtonRippleColor,
} from '../default';
import { withRippleEffect } from '../withRippleEffect';
import { iconStaticButtonTheme } from './staticTheme';

const optionalIconButtonTheme: OptionalButtonVariantTheme = {
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
  },
  subcomponents: {
    container: withRippleEffect({
      getRippleColor: getDefaultButtonRippleColor,
    })(DefaultViewSubcomponent),
  },
};

export const iconButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, iconStaticButtonTheme, optionalIconButtonTheme);
