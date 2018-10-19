import {
  DefaultButtonContainer,
  OptionalButtonVariantTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { getDefaultButtonLeftIconProps } from '../';
import { containedButtonTheme } from '../contained';
import {
  getCommonOutlinedButtonTextProps,
  getCommonOutlinedButtonViewProps,
  getDisabledOutlinedButtonViewProps,
  getEnabledOutlinedButtonViewProps,
  getFocusedOutlinedButtonViewProps,
  getHoveredOutlinedButtonViewProps,
  getPressedOutlinedButtonViewProps,
} from './';

const optionalOutlinedButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      leftIcon: {
        getProps: getDefaultButtonLeftIconProps,
      },
      text: {
        getProps: getCommonOutlinedButtonTextProps,
      },
      view: {
        getProps: getCommonOutlinedButtonViewProps,
      },
    },
    disabled: {
      view: {
        getProps: getDisabledOutlinedButtonViewProps,
      },
    },
    enabled: {
      view: {
        getProps: getEnabledOutlinedButtonViewProps,
      },
    },
    focused: {
      view: {
        getProps: getFocusedOutlinedButtonViewProps,
      },
    },
    hovered: {
      view: {
        getProps: getHoveredOutlinedButtonViewProps,
      },
    },
    pressed: {
      view: {
        getProps: getPressedOutlinedButtonViewProps,
      },
    },
  },
  large: {
    allStates: {
      view: {
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
      view: {
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
      view: {
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
    View: DefaultButtonContainer,
  },
  xlarge: {
    allStates: {
      view: {
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
      view: {
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
>({}, containedButtonTheme, optionalOutlinedButtonTheme);
