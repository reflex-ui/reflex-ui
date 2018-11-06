import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// prettier-ignore
import {
  getContainedButtonIconProps,
} from '../contained/ContainedButtonIconProps';
import { raisedStaticButtonTheme } from '../raised/raisedStaticButtonTheme';
import {
  disabledFabButtonContainerProps,
  enabledFabButtonContainerProps,
  focusedFabButtonContainerProps,
  hoveredFabButtonContainerProps,
  pressedFabButtonContainerProps,
} from './FabButtonContainerProps';

const partialFabStaticButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    allStates: {
      icon: {
        getProps: getContainedButtonIconProps,
      },
    },
    disabled: {
      container: {
        props: disabledFabButtonContainerProps,
      },
    },
    enabled: {
      container: {
        props: enabledFabButtonContainerProps,
      },
    },
    focused: {
      container: {
        props: focusedFabButtonContainerProps,
      },
    },
    hovered: {
      container: {
        props: hoveredFabButtonContainerProps,
      },
    },
    pressed: {
      container: {
        props: pressedFabButtonContainerProps,
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
            minWidth: 66,
            paddingHorizontal: 0,
            paddingVertical: 0,
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
            borderRadius: 28,
            height: 56,
            minWidth: 56,
            paddingHorizontal: 0,
            paddingVertical: 0,
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
            minWidth: 40,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
      icon: {
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
            borderRadius: 40,
            height: 80,
            minWidth: 80,
            paddingHorizontal: 0,
            paddingVertical: 0,
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
            minWidth: 30,
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        },
      },
    },
  },
};

export const fabStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, raisedStaticButtonTheme, partialFabStaticButtonTheme);
