import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { defaultStaticButtonTheme } from '../default/defaultStaticButtonTheme';
import { getIconButtonIconProps } from './IconButtonIconProps';

const optionalStaticIconButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      icon: {
        getProps: getIconButtonIconProps,
      },
    },
  },
  large: {
    allStates: {
      container: {
        props: {
          style: {
            borderRadius: 28,
            height: 56,
            minWidth: 56,
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
            borderRadius: 24,
            height: 48,
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
