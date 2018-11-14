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
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { getRaisedButtonContainerProps } from './container';
import { raisedStaticButtonTheme } from './staticTheme';

export const partialRaisedButtonTheme: OptionalButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: {
    allSizes: {
      allStates: {
        getProps: props =>
          getRaisedButtonContainerProps({
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
    })(withRaiseEffect(ElevationDegree.LOW)(DefaultButtonContainer)),
  },
};

export const raisedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, raisedStaticButtonTheme, partialRaisedButtonTheme);
