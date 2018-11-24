import {
  ButtonSubName,
  DefaultViewSubcomponent,
  InteractivityType,
  OptionalButtonTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { ElevationDegree } from '../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getFabButtonContainerProps } from './container';
import { fabStaticButtonTheme } from './staticTheme';

export const partialFabButtonTheme: OptionalButtonTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      allStates: {
        getProps: props =>
          getFabButtonContainerProps({
            ...props,
            interactivityState: {
              ...props.interactivityState,
              type: InteractivityType.DISABLED,
            },
          }),
      },
    },
    component: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(withRaiseEffect(ElevationDegree.MID)(DefaultViewSubcomponent)),
  },
};

export const fabButtonTheme: OptionalButtonTheme = merge<
  {},
  OptionalButtonTheme,
  OptionalButtonTheme
>({}, fabStaticButtonTheme, partialFabButtonTheme);
