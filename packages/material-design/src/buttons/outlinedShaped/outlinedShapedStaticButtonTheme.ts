import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// prettier-ignore
import {
  outlinedStaticButtonTheme,
} from '../outlined/outlinedStaticButtonTheme';
// prettier-ignore

const partialOutlinedShapedStaticButtonTheme: OptionalButtonVariantTheme = {
  large: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 20,
          },
        },
      },
    },
  },
  medium: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 18,
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
            borderRadius: 16,
          },
        },
      },
    },
  },
  xlarge: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 24,
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
            borderRadius: 14,
          },
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const outlinedShapedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, outlinedStaticButtonTheme, partialOutlinedShapedStaticButtonTheme);
