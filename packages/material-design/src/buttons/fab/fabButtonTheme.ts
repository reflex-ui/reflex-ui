import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { ElevationDegree } from '../../elevation/ElevationDegree';
// prettier-ignore
import {
  getContainedButtonIconProps,
} from '../contained/ContainedButtonIconProps';
import { raisedButtonTheme } from '../raised/raisedButtonTheme';
import { withRaiseEffect } from '../withRaiseEffect';
import { withRippleEffect } from '../withRippleEffect';

const partialFabButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      icon: {
        getProps: getContainedButtonIconProps,
      },
    },
  },
  large: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 33,
            height: 66,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 66,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
    },
  },
  regular: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 28,
            height: 56,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 56,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
    },
  },
  small: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 20,
            height: 40,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 40,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
      icon: {
        props: {
          style: {
            fontSize: 24,
          },
        },
      },
    },
  },
  subComponents: {
    Container: withRippleEffect(
      withRaiseEffect(ElevationDegree.MID)(DefaultButtonContainer),
    ),
  },
  xlarge: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 40,
            height: 80,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 80,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
    },
  },
  xsmall: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 15,
            height: 30,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 30,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
    },
  },
};

export const fabButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, raisedButtonTheme, partialFabButtonTheme);
