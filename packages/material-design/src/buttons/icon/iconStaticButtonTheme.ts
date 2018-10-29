import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { defaultStaticButtonTheme } from '../default/defaultStaticButtonTheme';

const optionalStaticIconButtonTheme: OptionalButtonVariantTheme = {
  large: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 28,
            height: 56,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 56,
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
            borderRadius: 24,
            height: 48,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 48,
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
            borderRadius: 40,
            height: 80,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 80,
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
            borderRadius: 16,
            height: 32,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 32,
          },
        },
      },
    },
  },
};

export const iconStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, defaultStaticButtonTheme, optionalStaticIconButtonTheme);
