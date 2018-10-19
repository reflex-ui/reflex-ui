import { isWeb, OptionalButtonVariantTheme } from '@reflex-ui/core';
import {
  getDefaultButtonLeftIconProps,
  getDefaultButtonTextProps,
  getDisabledDefaultButtonViewProps,
  getEnabledDefaultButtonViewProps,
  getFocusedDefaultButtonViewProps,
  getHoveredDefaultButtonViewProps,
  getPressedDefaultButtonViewProps,
} from './';

export const defaultButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      leftIcon: {
        getProps: getDefaultButtonLeftIconProps,
      },
      leftIconContainer: {
        props: {
          style: {
            marginLeft: 0,
          },
        },
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
      view: {
        getProps: getDisabledDefaultButtonViewProps,
      },
    },
    enabled: {
      view: {
        getProps: getEnabledDefaultButtonViewProps,
      },
    },
    focused: {
      view: {
        getProps: getFocusedDefaultButtonViewProps,
      },
    },
    hovered: {
      view: {
        getProps: getHoveredDefaultButtonViewProps,
      },
    },
    pressed: {
      view: {
        getProps: getPressedDefaultButtonViewProps,
      },
    },
  },
  large: {
    allStates: {
      view: {
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
      view: {
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
      view: {
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
      view: {
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
      view: {
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
