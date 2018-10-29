import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// prettier-ignore
import {
  getContainedButtonIconProps,
} from '../contained/ContainedButtonIconProps';
import { raisedStaticButtonTheme } from '../raised/raisedStaticButtonTheme';

const partialFabStaticButtonTheme: OptionalButtonVariantTheme = {
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

export const fabStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, raisedStaticButtonTheme, partialFabStaticButtonTheme);
