import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import {
  disabledContainedButtonIconProps,
  disabledContainedButtonTextProps,
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
      icon: {
        props: disabledContainedButtonIconProps,
      },
      leftIcon: {
        props: disabledContainedButtonIconProps,
      },
      rightIcon: {
        props: disabledContainedButtonIconProps,
      },
      text: {
        props: disabledContainedButtonTextProps,
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
            minWidth: 72,
            paddingHorizontal: 20,
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
            height: 36,
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
            minWidth: 54,
            paddingHorizontal: 8,
          },
        },
      },
    },
  },
};
