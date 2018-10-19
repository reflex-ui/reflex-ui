import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import { withRippleEffect } from '../withRippleEffect';
import {
  getContainedButtonLeftIconProps,
  getContainedButtonTextProps,
  getDisabledContainedButtonViewProps,
  getEnabledContainedButtonViewProps,
  getFocusedContainedButtonViewProps,
  getHoveredContainedButtonViewProps,
  getPressedContainedButtonViewProps,
} from './';

export const containedButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      leftIcon: {
        getProps: getContainedButtonLeftIconProps,
      },
      text: {
        getProps: getContainedButtonTextProps,
      },
    },
    disabled: {
      view: {
        getProps: getDisabledContainedButtonViewProps,
      },
    },
    enabled: {
      view: {
        getProps: getEnabledContainedButtonViewProps,
      },
    },
    focused: {
      view: {
        getProps: getFocusedContainedButtonViewProps,
      },
    },
    hovered: {
      view: {
        getProps: getHoveredContainedButtonViewProps,
      },
    },
    pressed: {
      view: {
        getProps: getPressedContainedButtonViewProps,
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
            minWidth: 72,
            paddingHorizontal: 20,
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
            paddingHorizontal: 16,
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
            paddingHorizontal: 16,
          },
        },
      },
    },
  },
  subComponents: {
    View: withRippleEffect(DefaultButtonContainer),
  },
  xlarge: {
    allStates: {
      view: {
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
      view: {
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
