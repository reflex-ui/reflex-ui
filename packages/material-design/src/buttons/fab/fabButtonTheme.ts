import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';
// prettier-ignore
import {
  getContainedButtonIconProps,
} from '../contained/ContainedButtonIconProps';
import { raisedButtonTheme } from '../raised/raisedButtonTheme';

const optionalFabButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      fabIcon: {
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
      fabIcon: {
        props: {
          style: {
            fontSize: 30,
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
      fabIcon: {
        props: {
          style: {
            fontSize: 24,
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
      fabIcon: {
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
            borderRadius: 39,
            height: 78,
            marginHorizontal: 0,
            marginVertical: 0,
            minWidth: 78,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
      fabIcon: {
        props: {
          style: {
            fontSize: 34,
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
      fabIcon: {
        props: {
          style: {
            fontSize: 18,
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
>({}, raisedButtonTheme, optionalFabButtonTheme);
