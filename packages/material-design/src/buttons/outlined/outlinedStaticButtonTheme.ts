import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getDefaultButtonIconProps } from '../';
// prettier-ignore
import {
  containedStaticButtonTheme,
} from '../contained/containedStaticButtonTheme';
// prettier-ignore
import {
  disabledDefaultButtonIconProps,
  disabledDefaultButtonTextProps,
} from '../default';
import {
  getCommonOutlinedButtonContainerProps,
  getCommonOutlinedButtonTextProps,
  getDisabledOutlinedButtonContainerProps,
  getEnabledOutlinedButtonContainerProps,
  getFocusedOutlinedButtonContainerProps,
  getHoveredOutlinedButtonContainerProps,
  getPressedOutlinedButtonContainerProps,
} from './';

const partialOutlinedStaticButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      container: {
        getProps: getCommonOutlinedButtonContainerProps,
      },
      leadingIcon: {
        getProps: getDefaultButtonIconProps,
      },
      text: {
        getProps: getCommonOutlinedButtonTextProps,
      },
      trailingIcon: {
        getProps: getDefaultButtonIconProps,
      },
    },
    disabled: {
      container: {
        getProps: getDisabledOutlinedButtonContainerProps,
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
  medium: {
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

export const outlinedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialOutlinedStaticButtonTheme);
