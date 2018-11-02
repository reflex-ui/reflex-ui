import {
  DefaultButtonContainer,
  InteractivityType,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import {
  ElevationDegree,
  getLowElevationStylesByInteractivity,
} from '../../elevation/';
import {
  getContainedButtonRippleColor,
  getHoveredContainedButtonContainerProps,
} from '../contained';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';
import { xfabStaticButtonTheme } from './xfabStaticButtonTheme';

export const partialXFabButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    disabled: {
      container: {
        props: {
          style: {
            ...getLowElevationStylesByInteractivity(InteractivityType.DISABLED),
          },
        },
      },
    },
    enabled: {
      container: {
        props: {
          style: {
            ...getLowElevationStylesByInteractivity(InteractivityType.DISABLED),
          },
        },
      },
    },
    focused: {
      container: {
        props: {
          style: {
            ...getLowElevationStylesByInteractivity(InteractivityType.DISABLED),
          },
        },
      },
    },
    hovered: {
      container: {
        props: {
          style: {
            ...getLowElevationStylesByInteractivity(InteractivityType.DISABLED),
          },
        },
      },
    },
    pressed: {
      container: {
        getProps: getHoveredContainedButtonContainerProps,
        props: {
          style: {
            ...getLowElevationStylesByInteractivity(InteractivityType.DISABLED),
          },
        },
      },
    },
  },
  subComponents: {
    Container: withRippleEffect({
      getRippleColor: getContainedButtonRippleColor,
    })(withRaiseEffect(ElevationDegree.MID)(DefaultButtonContainer)),
  },
};

export const xfabButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, xfabStaticButtonTheme, partialXFabButtonTheme);
