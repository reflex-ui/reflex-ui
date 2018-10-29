import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import {
  getContainedButtonIconProps,
  getContainedButtonTextProps,
  getDisabledContainedButtonContainerProps,
  getEnabledContainedButtonContainerProps,
  getFocusedContainedButtonContainerProps,
  getHoveredContainedButtonContainerProps,
  getPressedContainedButtonContainerProps,
} from './';

export const containedStaticButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      leftIcon: {
        getProps: getContainedButtonIconProps,
      },
      rightIcon: {
        getProps: getContainedButtonIconProps,
      },
      text: {
        getProps: getContainedButtonTextProps,
      },
    },
    disabled: {
      container: {
        getProps: getDisabledContainedButtonContainerProps,
      },
    },
    enabled: {
      container: {
        getProps: getEnabledContainedButtonContainerProps,
      },
    },
    focused: {
      container: {
        getProps: getFocusedContainedButtonContainerProps,
      },
    },
    hovered: {
      container: {
        getProps: getHoveredContainedButtonContainerProps,
      },
    },
    pressed: {
      container: {
        getProps: getPressedContainedButtonContainerProps,
      },
    },
  },
  large: {
    allStates: {
      container: {
        props: {
          style: {
            height: 40,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 72,
            paddingHorizontal: 20,
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
            height: 36,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
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
            height: 32,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 64,
            paddingHorizontal: 16,
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
            height: 48,
            marginHorizontal: 16,
            marginVertical: 8,
            minWidth: 82,
            paddingHorizontal: 28,
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
            height: 28,
            marginHorizontal: 8,
            marginVertical: 4,
            minWidth: 54,
            paddingHorizontal: 8,
          },
        },
      },
    },
  },
};
