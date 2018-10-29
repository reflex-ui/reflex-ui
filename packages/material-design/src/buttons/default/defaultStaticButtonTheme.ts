import { isWeb, OptionalButtonVariantTheme } from '@reflex-ui/core';

import {
  defaultButtonLeftIconContainerProps,
  defaultButtonRightIconContainerProps,
  getDefaultButtonIconProps,
  getDefaultButtonTextProps,
  getDisabledDefaultButtonContainerProps,
  getEnabledDefaultButtonContainerProps,
  getFocusedDefaultButtonContainerProps,
  getHoveredDefaultButtonContainerProps,
  getPressedDefaultButtonContainerProps,
} from './';

export const defaultStaticButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      leftIcon: {
        getProps: getDefaultButtonIconProps,
      },
      leftIconContainer: {
        props: defaultButtonLeftIconContainerProps,
      },
      rightIcon: {
        getProps: getDefaultButtonIconProps,
      },
      rightIconContainer: {
        props: defaultButtonRightIconContainerProps,
      },
      text: {
        getProps: getDefaultButtonTextProps,
        props: {
          style: {
            marginTop: isWeb ? -3 : 0,
          },
        },
      },
    },
    disabled: {
      container: {
        getProps: getDisabledDefaultButtonContainerProps,
      },
    },
    enabled: {
      container: {
        getProps: getEnabledDefaultButtonContainerProps,
      },
    },
    focused: {
      container: {
        getProps: getFocusedDefaultButtonContainerProps,
      },
    },
    hovered: {
      container: {
        getProps: getHoveredDefaultButtonContainerProps,
      },
    },
    pressed: {
      container: {
        getProps: getPressedDefaultButtonContainerProps,
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
            minWidth: 64,
            paddingHorizontal: 8,
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
            paddingHorizontal: 8,
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
            paddingHorizontal: 8,
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
            minWidth: 70,
            paddingHorizontal: 12,
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
            paddingHorizontal: 4,
          },
        },
      },
    },
  },
};
