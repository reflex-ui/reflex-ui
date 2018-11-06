import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// prettier-ignore
import {
  containedStaticButtonTheme,
} from '../contained/containedStaticButtonTheme';
// prettier-ignore

const partialShapedStaticButtonTheme: OptionalButtonVariantTheme = {
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

export const shapedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialShapedStaticButtonTheme);
