import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { getDefaultButtonIconProps } from '../';
import { containedButtonTheme } from '../contained';
import { withRippleEffect } from '../withRippleEffect';
import {
  getCommonOutlinedButtonContainerProps,
  getCommonOutlinedButtonTextProps,
  getDisabledOutlinedButtonContainerProps,
  getEnabledOutlinedButtonContainerProps,
  getFocusedOutlinedButtonContainerProps,
  getHoveredOutlinedButtonContainerProps,
  getPressedOutlinedButtonContainerProps,
} from './';

const partialOutlinedButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      container: {
        getProps: getCommonOutlinedButtonContainerProps,
      },
      leftIcon: {
        getProps: getDefaultButtonIconProps,
      },
      rightIcon: {
        getProps: getDefaultButtonIconProps,
      },
      text: {
        getProps: getCommonOutlinedButtonTextProps,
      },
    },
    disabled: {
      container: {
        getProps: getDisabledOutlinedButtonContainerProps,
      },
    },
    enabled: {
      container: {
        getProps: getEnabledOutlinedButtonContainerProps,
      },
    },
    focused: {
      container: {
        getProps: getFocusedOutlinedButtonContainerProps,
      },
    },
    hovered: {
      container: {
        getProps: getHoveredOutlinedButtonContainerProps,
      },
    },
    pressed: {
      container: {
        getProps: getPressedOutlinedButtonContainerProps,
      },
    },
  },
  large: {
    allStates: {
      container: {
        props: {
          style: {
            borderWidth: 2,
            paddingHorizontal: 18,
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
            borderWidth: 2,
            paddingHorizontal: 14,
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
            borderWidth: 2,
            paddingHorizontal: 14,
          },
        },
      },
    },
  },
  subComponents: {
    Container: withRippleEffect(DefaultButtonContainer),
  },
  xlarge: {
    allStates: {
      container: {
        props: {
          style: {
            borderWidth: 3,
            paddingHorizontal: 24,
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
            borderWidth: 1,
            paddingHorizontal: 6,
          },
        },
      },
    },
  },
};

export const outlinedButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedButtonTheme, partialOutlinedButtonTheme);
