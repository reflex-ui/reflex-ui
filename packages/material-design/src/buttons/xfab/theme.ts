import {
  ButtonSubName,
  DefaultButtonContainer,
  InteractivityType,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { ElevationDegree } from '../../elevation';
// tslint:disable-next-line:max-line-length
import { getContainedButtonRippleColor } from '../contained/getContainedButtonRippleColor';
import { getFabButtonContainerProps } from '../fab/container';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { xfabStaticButtonTheme } from './staticTheme';

export const partialXFabButtonTheme: OptionalButtonVariantTheme = {
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
  },
  subComponents: {
    [ButtonSubName.CONTAINER]: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(withRaiseEffect(ElevationDegree.MID)(DefaultButtonContainer)),
  },
};

export const xfabButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, xfabStaticButtonTheme, partialXFabButtonTheme);
