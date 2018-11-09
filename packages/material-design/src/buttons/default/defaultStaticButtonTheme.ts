import { isWeb, OptionalButtonVariantTheme } from '@reflex-ui/core';

import {
  defaultButtonLeadingIconContainerProps,
  defaultButtonTrailingIconContainerProps,
  disabledDefaultButtonIconProps,
  disabledDefaultButtonTextProps,
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
      leadingIcon: {
        getProps: getDefaultButtonIconProps,
      },
      leadingIconContainer: {
        props: defaultButtonLeadingIconContainerProps,
      },
      text: {
        getProps: getDefaultButtonTextProps,
        props: {
          style: {
            marginTop: isWeb ? -3 : 0,
          },
        },
      },
      trailingIcon: {
        getProps: getDefaultButtonIconProps,
      },
      trailingIconContainer: {
        props: defaultButtonTrailingIconContainerProps,
      },
    },
    disabled: {
      container: {
        getProps: getDisabledDefaultButtonContainerProps,
      },
      icon: {
        props: disabledDefaultButtonIconProps,
      },
      leadingIcon: {
        props: disabledDefaultButtonIconProps,
      },
      text: {
        props: disabledDefaultButtonTextProps,
      },
      trailingIcon: {
        props: disabledDefaultButtonIconProps,
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
            minWidth: 64,
            paddingHorizontal: 8,
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
            minWidth: 54,
            paddingHorizontal: 4,
          },
        },
      },
    },
  },
};
